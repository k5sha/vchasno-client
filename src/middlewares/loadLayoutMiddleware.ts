export async function loadLayoutMiddleware(route) {
    try {
		// Find layout in router meta
        const layout = route.meta.layout
        const layoutComponent = await import(`../layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
		// If layout undefind
        console.error('Error occurred in processing of layouts: ', e)
        console.log('Mounted default layout AppLayoutDefault')
		// Set default layout
        const layout = 'AppLayoutDefault'
        const layoutComponent = await import(`../layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    }
}