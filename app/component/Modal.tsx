"use client";
import { useState } from 'react'

export default function ModalState(props: {
  children: (isVisible: boolean, open: () => void, close: () => void) => JSX.Element
}) {
  const [isVisible, toggleVisibility] = useState(false)

  const open = () => toggleVisibility(true)
  const close = () => toggleVisibility(false)

  return props.children(isVisible, open, close)
}

