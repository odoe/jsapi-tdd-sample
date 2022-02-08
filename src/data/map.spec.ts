const mock_goTo = jest.fn()

import * as map from './map'
import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

jest.mock('@arcgis/core/Map')
jest.mock('@arcgis/core/views/MapView', () => {
	return jest.fn().mockImplementation(() => {
		return {
			goTo: mock_goTo
		}
	})
})

describe('data/map', () => {
    it('will initialize the map and view', async () => {
        const container = document.createElement('div')
        await map.initialize(container)
        expect(ArcGISMap).toHaveBeenCalledTimes(1)
        expect(MapView).toHaveBeenCalledTimes(1)
    })

    it('will zoom to a location', async () => {
        const container = document.createElement('div')
        await map.initialize(container)
        const point = {
            type: 'point',
            x: 65,
            y: 65
        }
        map.zoomToLocation(point)

        expect(mock_goTo).toHaveBeenCalledWith({
            target: point
        })
    })
})