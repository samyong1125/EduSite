"use client"

import { useState, useEffect } from "react"

// 화면 크기 옵션 정의
export type FontSizeOption = "small" | "medium" | "large" | "x-large"

interface FontSizeConfig {
  label: string
  value: FontSizeOption
  scale: number
}

// 화면 크기 설정 옵션
export const fontSizeOptions: FontSizeConfig[] = [
  { label: "작게", value: "small", scale: 0.9 },
  { label: "보통", value: "medium", scale: 1 },
  { label: "크게", value: "large", scale: 1.1 },
  { label: "매우 크게", value: "x-large", scale: 1.2 },
]

export function useFontSize() {
  const [currentFontSize, setCurrentFontSize] = useState<FontSizeOption>("medium")

  // 페이지 로드 시 저장된 설정 불러오기
  useEffect(() => {
    const savedFontSize = localStorage.getItem("font-size") as FontSizeOption
    if (savedFontSize) {
      setCurrentFontSize(savedFontSize)
      applyFontSize(savedFontSize)
    }
  }, [])

  // 화면 크기 변경 함수
  const changeFontSize = (size: FontSizeOption) => {
    setCurrentFontSize(size)
    localStorage.setItem("font-size", size)
    applyFontSize(size)
  }

  // 화면 크기 적용 함수
  const applyFontSize = (size: FontSizeOption) => {
    const option = fontSizeOptions.find((opt) => opt.value === size)
    if (!option) return

    // HTML 루트 요소에 font-size 스타일 적용
    document.documentElement.style.fontSize = `${option.scale * 100}%`

    // 화면 크기 클래스 적용
    document.documentElement.classList.remove("text-small", "text-medium", "text-large", "text-x-large")
    document.documentElement.classList.add(`text-${size}`)
  }

  return {
    currentFontSize,
    changeFontSize,
    fontSizeOptions,
  }
}
