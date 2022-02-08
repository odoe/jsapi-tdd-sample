import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

const app: any = {}

export async function initialize(container: HTMLDivElement) {
    const map = new ArcGISMap({
        basemap: 'streets-vector'
    })

    const view = new MapView({
        container,
        map,
        center: [-118, 34],
    })

    app.view = view

    return view
}

export function zoomToLocation(point: {type: string, x: number, y: number}) {
    app.view.goTo({
        target: point
    })
}