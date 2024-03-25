import { AppShell, Burger, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import {
    RiAdminLine,
    RiAlarmWarningLine,
    RiBankCard2Line,
    RiCommunityLine,
    RiDashboardLine,
    RiGift2Line,
    RiLinksFill,
    RiUserLine,
} from 'react-icons/ri'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import classes from './NavLink.module.css'

export const Layout = () => {
    const [opened, { toggle }] = useDisclosure()
    const [active, setActive] = useState(0)

    const navItems = [
        { icon: RiDashboardLine, label: 'Dashboard', link: '/dashboard' },
        { icon: RiUserLine, label: 'Users', link: '/dashboard' },
        { icon: RiCommunityLine, label: 'Requests', link: '/rental-requests' },
        { icon: RiBankCard2Line, label: 'Payments', link: '/dashboard' },
        { icon: RiGift2Line, label: 'Offers & Propreties', link: '/dashboard' },
        { icon: RiAlarmWarningLine, label: 'Help tickets', link: '/' },
        { icon: RiLinksFill, label: 'Partners', link: '/' },
        { icon: RiAdminLine, label: 'Admin manager', link: '/' },
    ]
    return (
        <AppShell
            header={{ height: 80 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
            styles={{
                navbar: {
                    backgroundColor: '#256A741A',
                },
            }}
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <img
                    src={logo}
                    alt=""
                    style={{ paddingTop: '10px', paddingLeft: '30px' }}
                />
            </AppShell.Header>

            <AppShell.Navbar p="md">
                {navItems.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <NavLink
                            className={classes.navlink}
                            m={5}
                            h={50}
                            pt={30}
                            pb={30}
                            label={item.label}
                            leftSection={<item.icon size={18} color="4F4F4F" />}
                            component={Link}
                            to={item.link}
                            active={index === active}
                            onClick={() => setActive(index)}
                            styles={{
                                label: {
                                    fontSize: '16px',
                                    color: '#4F4F4F',
                                },
                            }}
                            color="#256A47"
                        />
                    </React.Fragment>
                ))}
            </AppShell.Navbar>

            <AppShell.Main w={'100vw'}>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}
