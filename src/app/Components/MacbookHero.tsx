'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, useTexture } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const MODEL_URL = '/models/modelo.glb'
const LID_NODE_NAME = 'RcexTyyhpuJYATQ'
const SCREEN_MESH_NAME = 'tfTbkkzhxqpKRgC'
const CHASSIS_MATERIAL_NAMES = new Set([
  'zNRfbdNyoCOxSDD',
  'HdeQgqDhVRltuvQ',
  'MTVWTmEddByGzeA',
  'gGmExFByNnyrwMm',
  'GdPtFLZURIXFHzu',
  'cFRLiGCORrjAihr',
  'TMkvtqywJDMvuJf',
  'jgUGvZiSIPFNFGe',
  'GzMrvkTsmRxvOJz',
  'IqdrVPEOaZqbHHo',
  'HzlgDKVNnMxfNgM',
  'vJOGifqMXcmlCkF',
  'XvtJEVWVvyDeJRR',
  'xEcnbqMzoZoLkIZ',
  'YMmdfGRsPviDXYd',
  'kMkIQgtfAZdmtyc',
  'sqkqSXQCeccDMmm',
  'waAAeDqzqDLObIi',
  'WiyOPYJEeiHNVjF',
  'pKaDkdyuuvylYHt',
  'ZtrFkpzRROyZncn',
])
const CHASSIS_COLOR = new THREE.Color('#0b2e59')

const SCREENS = [
  '/banner-rafa.png',
  '/banner-auros.png',
  '/banner-patrono.png',
  '/banner-tbmotors.png',
  '/banner-cloock.png',
]

const OPEN_ANGLE = 0
const CLOSED_ANGLE = THREE.MathUtils.degToRad(109)
const LID_HINGE_Y = -10.495
const LID_HINGE_Z = 0.598
const LID_CLOSED_Y_OFFSET = -0.9

const HOLD_DURATION = 3.2
const CLOSE_DURATION = 0.8
const OPEN_DURATION = 0.9
const SPIN_DURATION = 1.4
const MODEL_BASE_Y = -0.35

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function setLidAngle(lid: THREE.Object3D, angle: number) {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const closeProgress = THREE.MathUtils.clamp(angle / CLOSED_ANGLE, 0, 1)

  lid.rotation.x = angle
  lid.position.y = LID_HINGE_Y * (1 - cos) + LID_HINGE_Z * sin + LID_CLOSED_Y_OFFSET * closeProgress
  lid.position.z = LID_HINGE_Z * (1 - cos) - LID_HINGE_Y * sin
}

type Phase = 'open' | 'closing' | 'opening' | 'spinning'

function MacbookModel() {
  const { scene } = useGLTF(MODEL_URL)
  const textures = useTexture(SCREENS)

  const spinGroupRef = useRef<THREE.Group>(null)
  const lidRef = useRef<THREE.Object3D | null>(null)
  const screenMatRef = useRef<THREE.MeshStandardMaterial | null>(null)

  const phase = useRef<Phase>('open')
  const phaseTime = useRef(0)
  const screenIndex = useRef(0)

  useEffect(() => {
    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return

      const materials = Array.isArray(object.material) ? object.material : [object.material]
      materials.forEach((material) => {
        if (!(material instanceof THREE.MeshStandardMaterial) || !CHASSIS_MATERIAL_NAMES.has(material.name)) return

        material.color.copy(CHASSIS_COLOR)
        material.metalness = 0.75
        material.roughness = 0.32
        material.needsUpdate = true
      })
    })

    lidRef.current = scene.getObjectByName(LID_NODE_NAME) ?? null
    const mesh = scene.getObjectByName(SCREEN_MESH_NAME) as THREE.Mesh | undefined
    const mat = mesh?.material as THREE.MeshStandardMaterial | undefined
    if (mat) {
      textures.forEach((tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        tex.flipY = false
        tex.rotation = 0
        tex.needsUpdate = true
      })
      mat.emissiveMap = textures[0]
      mat.emissiveIntensity = 1
      mat.needsUpdate = true
      screenMatRef.current = mat
    }
  }, [scene, textures])

  useFrame((_, delta) => {
    const lid = lidRef.current
    const spinGroup = spinGroupRef.current
    if (!lid || !spinGroup) return

    if (typeof window !== 'undefined' && (window as any).__debugCloseT !== undefined) {
      const t = (window as any).__debugCloseT
      setLidAngle(lid, THREE.MathUtils.lerp(OPEN_ANGLE, CLOSED_ANGLE, t))
      spinGroup.rotation.y = 0
      return
    }

    phaseTime.current += delta

    if (phase.current === 'open') {
      setLidAngle(lid, OPEN_ANGLE)
      spinGroup.rotation.y = 0
      if (phaseTime.current >= HOLD_DURATION) {
        phase.current = 'closing'
        phaseTime.current = 0
      }
    } else if (phase.current === 'closing') {
      const t = easeInOutCubic(Math.min(phaseTime.current / CLOSE_DURATION, 1))
      setLidAngle(lid, THREE.MathUtils.lerp(OPEN_ANGLE, CLOSED_ANGLE, t))
      if (phaseTime.current >= CLOSE_DURATION) {
        const mat = screenMatRef.current
        if (mat) {
          screenIndex.current = (screenIndex.current + 1) % textures.length
          mat.emissiveMap = textures[screenIndex.current]
          mat.needsUpdate = true
        }
        phase.current = 'spinning'
        phaseTime.current = 0
      }
    } else if (phase.current === 'opening') {
      const t = easeInOutCubic(Math.min(phaseTime.current / OPEN_DURATION, 1))
      setLidAngle(lid, THREE.MathUtils.lerp(CLOSED_ANGLE, OPEN_ANGLE, t))
      if (phaseTime.current >= OPEN_DURATION) {
        setLidAngle(lid, OPEN_ANGLE)
        phase.current = 'open'
        phaseTime.current = 0
      }
    } else if (phase.current === 'spinning') {
      const t = easeInOutCubic(Math.min(phaseTime.current / SPIN_DURATION, 1))
      setLidAngle(lid, CLOSED_ANGLE)
      spinGroup.rotation.y = t * Math.PI * 2
      if (phaseTime.current >= SPIN_DURATION) {
        spinGroup.rotation.y = 0
        phase.current = 'opening'
        phaseTime.current = 0
      }
    }
  })

  return (
    <group ref={spinGroupRef}>
      <primitive object={scene} />
    </group>
  )
}

function FloatingRig() {
  const floatRef = useRef<THREE.Group>(null)
  const canvasWidth = useThree((state) => state.size.width)
  const [isDesktop, setIsDesktop] = useState(false)
  const modelScale = isDesktop ? 6.1 : canvasWidth < 640 ? 3.9 : 4.7

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const updateDesktop = () => setIsDesktop(media.matches)

    updateDesktop()
    media.addEventListener('change', updateDesktop)
    return () => media.removeEventListener('change', updateDesktop)
  }, [])

  useFrame((state) => {
    const g = floatRef.current
    if (!g) return
    g.position.y = MODEL_BASE_Y - (1 + Math.sin(state.clock.elapsedTime * 0.7)) * 0.03
    g.rotation.z = -0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.015
  })

  return (
    <group ref={floatRef} rotation={[0.1, -0.3, -0.08]} position={[-0.7, MODEL_BASE_Y, 0]}>
      <group scale={modelScale}>
        <MacbookModel />
      </group>
    </group>
  )
}

export function MacbookHero() {
  return (
    <Canvas
      camera={{ position: [2.2, 1.1, 3.2], fov: 32 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} />
      <directionalLight position={[-3, -2, -2]} intensity={0.4} />
      <Suspense fallback={null}>
        <FloatingRig />
        <Environment preset="apartment" environmentIntensity={0.6} />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload(MODEL_URL)
