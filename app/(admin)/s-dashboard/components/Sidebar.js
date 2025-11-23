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
    DollarSign
} from 'lucide-react'

export default function Sidebar({ className = '' }) {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState('dashboard')

    const menu = [
        { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: Home, href: '/s-dashboard' },
        { id: 'courses', label: 'কোর্সসমূহ', icon: BookOpen, badge: '12', href: '/s-dashboard/courses' },
        { id: 'schedule', label: 'শিডিউল', icon: Calendar, href: '/s-dashboard/schedule' },
        { id: 'addStudent', label: 'স্টুডেন্ট যুক্ত করুন', icon: Calendar, href: '/s-dashboard/addStudent' },
        { id: 'viewStudent', label: 'স্টুডেন্ট তালিকা দেখুন', icon: Calendar, href: '/s-dashboard/viewStudent' },
        { id: 'createResult', label: 'রেজাল্ট তৈরি করুন', icon: User, href: '/s-dashboard/createResult' },
        { id: 'viewResult', label: 'রেজাল্ট তালিকা দেখুন', icon: User, href: '/s-dashboard/viewResult' },
        { id: 'paymentHistory', label: 'পেমেন্ট গুলো', icon: DollarSign, href: '/s-dashboard/paymentHistory' },
        { id: 'trainers', label: 'ট্রেইনার', icon: User, href: '/s-dashboard/trainers' },
        { id: 'certificates', label: 'সার্টিফিকেট', icon: Award, href: '/s-dashboard/certificates' },
        { id: 'settings', label: 'সেটিংস', icon: Settings, href: '/s-dashboard/settings' }
    ]

    return (
        <aside
            className={`bg-white/80 backdrop-blur-md border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 h-screen p-4 flex flex-col justify-between ${className}`}
            aria-label="sidebar"
        >
            <div>
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

                <div className={`mt-4 transition-all ${collapsed ? 'hidden' : 'block'}`}>
                    <label className="relative block">
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="কোর্স বা ট্রেইনার খুঁজুন..."
                        />
                    </label>
                </div>

                <nav className="mt-6">
                    <ul className="flex flex-col gap-1">
                        {menu.map((m) => {
                            const Icon = m.icon
                            const isActive = active === m.id
                            return (
                                <li key={m.id}>
                                    <Link href={m.href} passHref>
                                        <button
                                            onClick={() => setActive(m.id)}
                                            className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition-colors duration-150 ${isActive
                                                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-700/10 dark:text-indigo-300 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                                            }`}
                                        >
                                            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-white/60 shadow-sm">
                                                <Icon size={18} />
                                            </span>

                                            <span className={`${collapsed ? 'hidden' : 'block'}`}>{m.label}</span>

                                            {m.badge && !collapsed && (
                                                <span className="ml-auto text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{m.badge}</span>
                                            )}
                                        </button>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

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

                <div className={`mt-4 flex items-center justify-between gap-2 ${collapsed ? 'flex' : 'hidden'}`}>
                    <Link href='/profile'><button className="p-2 rounded-md" title="Profile"><User size={16} /></button></Link>
                    <Link href='/courses'><button className="p-2 rounded-md" title="Courses"><BookOpen size={16} /></button></Link>
                    <Link href='/settings'><button className="p-2 rounded-md" title="Settings"><Settings size={16} /></button></Link>
                </div>
            </div>

            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:hidden w-[92%] bg-white/95 border border-gray-200 rounded-full p-2 shadow-lg flex justify-around">
                {menu.slice(0, 4).map((m) => {
                    const Icon = m.icon
                    const isActive = active === m.id
                    return (
                        <Link href={m.href} key={m.id} passHref>
                            <button onClick={() => setActive(m.id)} className={`flex flex-col items-center gap-1 text-xs ${isActive ? 'text-indigo-600' : 'text-gray-600'}`}>
                                <Icon size={18} />
                                <span>{m.label.split('')[0]}</span>
                            </button>
                        </Link>
                    )
                })}
            </div>
        </aside>
    )
}