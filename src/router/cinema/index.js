export default {
    path: '/cinema/',
    component: () =>
        import ('@/views/Cinema'),
    children: [{
        path: 'cinemacontent',
        component: () =>
            import ('@/components/CinemaContent')
    }, {
        path: '/cinema',
        redirect: '/cinema/cinemacontent'
    }]
}