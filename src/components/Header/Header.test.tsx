/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from './Header'

test('Header should have specific textContent', () => {
    render(<Header />)

    expect(screen.getByRole('heading'))
    .toHaveTextContent("Hello, React with Typescript and Parcel Bundler")
})