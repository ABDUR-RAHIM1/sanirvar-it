"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {
    LaptopComputer,
    User,
    BookOpen,
    Calendar,
    Award,
    Settings,
    LogOut,
    Menu,
    Home,
    DollarSign,
    ChevronDown,
    ChevronUp
} from 'lucide-react'

export default function Sidebar({ className = '' }) {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState('dashboard')
    const [openSubMenu, setOpenSubMenu] = useState(null)

    const menu = [
        { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: Home, href: '/s-dashboard' },
        { id: 'courses', label: 'কোর্সসমূহ', icon: BookOpen, badge: '12', href: '/s-dashboard/courses' },
        {
            id: 'students', label: 'স্টুডেন্ট ম্যানেজমেন্ট', icon: User, subMenu: [
                { id: 'addStudent', label: 'স্টুডেন্ট যুক্ত করুন', href: '/s-dashboard/addStudent' },
                { id: 'viewStudent', label: 'স্টুডেন্ট তালিকা দেখুন', href: '/s-dashboard/viewStudent' },
            ]
        },
        {
            id: 'results', label: 'রেজাল্ট', icon: User, subMenu: [
                { id: 'viewResult', label: 'রেজাল্ট তালিকা দেখুন', href: '/s-dashboard/viewResult' },
            ]
        },
        {
            id: 'paymentHistory', label: 'পেমেন্ট', icon: DollarSign, subMenu: [
                { id: 'payments', label: 'পেমেন্ট গুলো', href: '/s-dashboard/paymentHistory' },

            ]
        },

        { id: 'trainers', label: 'ট্রেইনার', icon: User, href: '/s-dashboard/trainers' },
        { id: 'certificates', label: 'সার্টিফিকেট', icon: Award, href: '/s-dashboard/certificates' },
        {
            id: 'settings', label: 'সেটিংস', icon: Settings, subMenu: [
                { id: 'pages', label: 'পেজ গুলো', href: '/s-dashboard/settings/pages' },
            ]
        },
    ]

    const toggleSubMenu = (id) => {
        setOpenSubMenu(openSubMenu === id ? null : id)
    }

    return (
        <aside
            className={`bg-white/80 backdrop-blur-md border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 h-screen p-4 flex flex-col justify-between ${className}`}
            aria-label="sidebar"
        >
            <div>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold shadow-md">
                            CT
                        </div>
                        <div className={`transition-opacity duration-200 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                            <h1 className="text-lg font-semibold">Computer Training</h1>
                            <p className="text-sm text-gray-500">Learn, Build, Launch</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Toggle sidebar"
                        title={collapsed ? 'Expand' : 'Collapse'}
                    >
                        <Menu size={18} />
                    </button>
                </div>

                {/* Search */}
                <div className={`mt-4 transition-all ${collapsed ? 'hidden' : 'block'}`}>
                    <label className="relative block">
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="কোর্স বা ট্রেইনার খুঁজুন..."
                        />
                    </label>
                </div>

                {/* Navigation Menu */}
                <nav className="mt-6">
                    <ul className="flex flex-col gap-1">
                        {menu.map((m) => {
                            const Icon = m.icon
                            const isActive = active === m.id
                            const hasSubMenu = m.subMenu && m.subMenu.length > 0
                            const isOpen = openSubMenu === m.id

                            return (
                                <li key={m.id}>
                                    <div className={`group flex items-center justify-between w-full px-3 py-2 rounded-md transition-colors duration-150 ${isActive ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-700/10 dark:text-indigo-300 font-medium' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}>
                                        <button
                                            onClick={() => hasSubMenu ? toggleSubMenu(m.id) : setActive(m.id)}
                                            className="flex items-center gap-3 w-full text-left"
                                        >
                                            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-white/60 shadow-sm">
                                                <Icon size={18} />
                                            </span>
                                            <span className={`${collapsed ? 'hidden' : 'block'}`}>{m.label}</span>
                                        </button>
                                        {hasSubMenu && !collapsed && (
                                            <button onClick={() => toggleSubMenu(m.id)}>
                                                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </button>
                                        )}
                                    </div>

                                    {/* SubMenu */}
                                    {hasSubMenu && isOpen && !collapsed && (
                                        <ul className="ml-12 mt-1 flex flex-col gap-1">
                                            {m.subMenu.map((sm) => (
                                                <li key={sm.id}>
                                                    <Link href={sm.href} passHref>
                                                        <button
                                                            onClick={() => setActive(sm.id)}
                                                            className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition-colors duration-150 ${active === sm.id ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-700/10 dark:text-indigo-300 font-medium' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                                                        >
                                                            <span className="text-sm">{sm.label}</span>
                                                        </button>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

            {/* User Info */}
            <div className="mt-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <User size={18} />
                    </div>

                    <div className={`${collapsed ? 'hidden' : 'block'}`}>
                        <p className="text-sm font-medium">Nahid Arman Rony</p>
                        <p className="text-xs text-gray-500">Admin / Instructor</p>
                    </div>

                    <button className={`ml-auto ${collapsed ? 'hidden' : 'inline-flex'}`} title="Sign out">
                        <LogOut size={16} />
                    </button>
                </div>
            </div>
        </aside>
    )
}
