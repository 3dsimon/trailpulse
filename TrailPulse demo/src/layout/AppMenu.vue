<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Training Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Training Management',
        items: [
            { label: 'Training Plans', icon: 'pi pi-fw pi-calendar', to: '/uikit/formlayout' },
            { label: 'Posture Analysis', icon: 'pi pi-fw pi-chart-line', to: '/uikit/input' },
            { label: 'Real-time Feedback', icon: 'pi pi-fw pi-play', to: '/uikit/button', class: 'rotated-icon' },
            { label: 'Training Records', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
            { label: 'Statistics', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/list' },
            { label: 'Route Management', icon: 'pi pi-fw pi-map', to: '/uikit/tree' },
            { label: 'Performance Reports', icon: 'pi pi-fw pi-file', to: '/uikit/panel' }
        ]
    },
    {
        label: 'User Management',
        icon: 'pi pi-fw pi-users',
        to: '/pages',
        items: [
            {
                label: 'User Profile',
                icon: 'pi pi-fw pi-user',
                to: '/landing'
            },
            {
                label: 'Running History',
                icon: 'pi pi-fw pi-history',
                to: '/auth/login'
            },
            {
                label: 'Training Data',
                icon: 'pi pi-fw pi-database',
                to: '/pages/crud'
            },
            {
                label: 'Achievement System',
                icon: 'pi pi-fw pi-star',
                to: '/pages/notfound'
            }
        ]
    },
    {
        label: 'AI Analysis',
        items: [
            {
                label: 'Posture Assessment',
                icon: 'pi pi-fw pi-video',
                items: [
                    {
                        label: 'Keypoint Detection',
                        icon: 'pi pi-fw pi-circle',
                        items: [
                            { label: 'Running Posture', icon: 'pi pi-fw pi-running' },
                            { label: 'Gait Analysis', icon: 'pi pi-fw pi-sync' },
                            { label: 'Balance Assessment', icon: 'pi pi-fw pi-balance-scale' }
                        ]
                    },
                    {
                        label: 'Issue Identification',
                        icon: 'pi pi-fw pi-exclamation-triangle',
                        items: [{ label: 'Common Errors', icon: 'pi pi-fw pi-times-circle',to: '/documentation' }]
                    }
                ]
            },
            {
                label: 'Smart Recommendations',
                icon: 'pi pi-fw pi-lightbulb',
                items: [
                    {
                        label: 'Personalized Training',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            { label: 'Strength Training', icon: 'pi pi-fw pi-dumbbell'},
                            { label: 'Flexibility', icon: 'pi pi-fw pi-arrows-h', to: '/documentation' }
                        ]
                    },
                    {
                        label: 'Recovery Advice',
                        icon: 'pi pi-fw pi-heart',
                        items: [{ label: 'Rest Plans', icon: 'pi pi-fw pi-moon' , to: '/documentation'}]
                    }
                ]
            }
        ]
    },
    {
        label: 'System Settings',
        items: [
            {
                label: 'Device Management',
                icon: 'pi pi-fw pi-mobile',
            },
            {
                label: 'Privacy Settings',
                icon: 'pi pi-fw pi-shield',
                url: '',
                target: '_blank'
            },
            {
                label: 'Help & Documentation',
                icon: 'pi pi-fw pi-question-circle',
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>