// DATA
const averageVelocity = [{
    'time': '9:00',
    'black_sand': {
        'trial1': '1.3',
        'trial2': '1.2',
        'trial3': '1.2'
    },
    'pebbles': {
        'trial1': '1.3',
        'trial2': '1.2',
        'trial3': '1'
    },
    'combined': {
        'trial1': '1.2',
        'trial2': '1.2',
        'trial3': '1.2'
    },
    'average_black_sand': '1.23333333333333',
    'average_pebbles': '1.16666666666667',
    'average_combined': '1.2'
}, {
    'time': '9:30',
    'black_sand': {
        'trial1': '1.4',
        'trial2': '1.3',
        'trial3': '1.3'
    },
    'pebbles': {
        'trial1': '1.3',
        'trial2': '1.3',
        'trial3': '1.2'
    },
    'combined': {
        'trial1': '1.2',
        'trial2': '1.2',
        'trial3': '1.2'
    },
    'average_black_sand': '1.33333333333333',
    'average_pebbles': '1.26666666666667',
    'average_combined': '1.2'
}, {
    'time': '10:00',
    'black_sand': {
        'trial1': '1.3',
        'trial2': '1.5',
        'trial3': '1.4'
    },
    'pebbles': {
        'trial1': '1.3',
        'trial2': '1.3',
        'trial3': '1.1'
    },
    'combined': {
        'trial1': '1.3',
        'trial2': '1.3',
        'trial3': '1.3'
    },
    'average_black_sand': '1.4',
    'average_pebbles': '1.23333333333333',
    'average_combined': '1.3'
}, {
    'time': '10:30',
    'black_sand': {
        'trial1': '1.7',
        'trial2': '1.5',
        'trial3': '1.3'
    },
    'pebbles': {
        'trial1': '1.5',
        'trial2': '1.3',
        'trial3': '1.5'
    },
    'combined': {
        'trial1': '1.4',
        'trial2': '1.3',
        'trial3': '1.3'
    },
    'average_black_sand': '1.5',
    'average_pebbles': '1.43333333333333',
    'average_combined': '1.33333333333333'
}, {
    'time': '11:00',
    'black_sand': {
        'trial1': '1.4',
        'trial2': '1.5',
        'trial3': '1.2'
    },
    'pebbles': {
        'trial1': '1.5',
        'trial2': '1.3',
        'trial3': '1.5'
    },
    'combined': {
        'trial1': '1.1',
        'trial2': '1.3',
        'trial3': '1.5'
    },
    'average_black_sand': '1.36666666666667',
    'average_pebbles': '1.43333333333333',
    'average_combined': '1.3'
}, {
    'time': '11:30',
    'black_sand': {
        'trial1': '1.4',
        'trial2': '1.6',
        'trial3': '1.4'
    },
    'pebbles': {
        'trial1': '1.4',
        'trial2': '1.4',
        'trial3': '1.7'
    },
    'combined': {
        'trial1': '1.6',
        'trial2': '1.5',
        'trial3': '1.4'
    },
    'average_black_sand': '1.46666666666667',
    'average_pebbles': '1.5',
    'average_combined': '1.5'
}, {
    'time': '12:00',
    'black_sand': {
        'trial1': '1.4',
        'trial2': '1.7',
        'trial3': '1.3'
    },
    'pebbles': {
        'trial1': '1.5',
        'trial2': '1.5',
        'trial3': '1.8'
    },
    'combined': {
        'trial1': '1.5',
        'trial2': '1.9',
        'trial3': '1.5'
    },
    'average_black_sand': '1.46666666666667',
    'average_pebbles': '1.6',
    'average_combined': '1.63333333333333'
}, {
    'time': '12:30',
    'black_sand': {
        'trial1': '1.4',
        'trial2': '1.5',
        'trial3': '1.4'
    },
    'pebbles': {
        'trial1': '1.6',
        'trial2': '1.6',
        'trial3': '1.6'
    },
    'combined': {
        'trial1': '1.5',
        'trial2': '2',
        'trial3': '1.8'
    },
    'average_black_sand': '1.43333333333333',
    'average_pebbles': '1.6',
    'average_combined': '1.76666666666667'
}, {
    'time': '1:00',
    'black_sand': {
        'trial1': '1.3',
        'trial2': '1.8',
        'trial3': '1.8'
    },
    'pebbles': {
        'trial1': '1.8',
        'trial2': '1.8',
        'trial3': '1.4'
    },
    'combined': {
        'trial1': '1.7',
        'trial2': '1.9',
        'trial3': '1.8'
    },
    'average_black_sand': '1.63333333333333',
    'average_pebbles': '1.66666666666667',
    'average_combined': '1.8'
}, {
    'time': '1:30',
    'black_sand': {
        'trial1': '1.1',
        'trial2': '1.9',
        'trial3': '1.8'
    },
    'pebbles': {
        'trial1': '1.6',
        'trial2': '1.6',
        'trial3': '1.6'
    },
    'combined': {
        'trial1': '1.7',
        'trial2': '1.8',
        'trial3': '1.7'
    },
    'average_black_sand': '1.6',
    'average_pebbles': '1.6',
    'average_combined': '1.73333333333333'
}, {
    'time': '2:00',
    'black_sand': {
        'trial1': '1.2',
        'trial2': '1.7',
        'trial3': '1.7'
    },
    'pebbles': {
        'trial1': '1.5',
        'trial2': '1.5',
        'trial3': '1.5'
    },
    'combined': {
        'trial1': '1.9',
        'trial2': '1.6',
        'trial3': '1.7'
    },
    'average_black_sand': '1.53333333333333',
    'average_pebbles': '1.5',
    'average_combined': '1.73333333333333'
}, {
    'time': '2:30',
    'black_sand': {
        'trial1': '1.2',
        'trial2': '1.5',
        'trial3': '1.6'
    },
    'pebbles': {
        'trial1': '1.6',
        'trial2': '1.6',
        'trial3': '1.4'
    },
    'combined': {
        'trial1': '1.6',
        'trial2': '1.5',
        'trial3': '1.8'
    },
    'average_black_sand': '1.43333333333333',
    'average_pebbles': '1.53333333333333',
    'average_combined': '1.63333333333333'
}, {
    'time': '3:00',
    'black_sand': {
        'trial1': '1.4',
        'trial2': '1.6',
        'trial3': '1.5'
    },
    'pebbles': {
        'trial1': '1.6',
        'trial2': '1.6',
        'trial3': '1.3'
    },
    'combined': {
        'trial1': '1.6',
        'trial2': '1.4',
        'trial3': '1.6'
    },
    'average_black_sand': '1.5',
    'average_pebbles': '1.5',
    'average_combined': '1.53333333333333'
}, {
    'time': '3:30',
    'black_sand': {
        'trial1': '1.2',
        'trial2': '1.5',
        'trial3': '1.6'
    },
    'pebbles': {
        'trial1': '1.6',
        'trial2': '1.6',
        'trial3': '1.2'
    },
    'combined': {
        'trial1': '1.4',
        'trial2': '1.3',
        'trial3': '1.8'
    },
    'average_black_sand': '1.43333333333333',
    'average_pebbles': '1.46666666666667',
    'average_combined': '1.5'
}, {
    'time': '4:00',
    'black_sand': {
        'trial1': '1.1',
        'trial2': '1.7',
        'trial3': '1.6'
    },
    'pebbles': {
        'trial1': '1.2',
        'trial2': '1.2',
        'trial3': '1.2'
    },
    'combined': {
        'trial1': '1.4',
        'trial2': '1.3',
        'trial3': '1.5'
    },
    'average_black_sand': '1.46666666666667',
    'average_pebbles': '1.2',
    'average_combined': '1.4'
}, {
    'time': '4:30',
    'black_sand': {
        'trial1': '1.1',
        'trial2': '1.6',
        'trial3': '1.3'
    },
    'pebbles': {
        'trial1': '1.1',
        'trial2': '1.1',
        'trial3': '1.1'
    },
    'combined': {
        'trial1': '1.3',
        'trial2': '1.1',
        'trial3': '1.4'
    },
    'average_black_sand': '1.33333333333333',
    'average_pebbles': '1.1',
    'average_combined': '1.26666666666667'
}, {
    'time': '5:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '1.5',
        'trial3': '1.1'
    },
    'pebbles': {
        'trial1': '1',
        'trial2': '1.1',
        'trial3': '1.3'
    },
    'combined': {
        'trial1': '1.4',
        'trial2': '1.1',
        'trial3': '1.4'
    },
    'average_black_sand': '0.866666666666667',
    'average_pebbles': '1.13333333333333',
    'average_combined': '1.3'
}, {
    'time': '5:30',
    'black_sand': {
        'trial1': '0',
        'trial2': '1.1',
        'trial3': '0.8'
    },
    'pebbles': {
        'trial1': '0.9',
        'trial2': '0.9',
        'trial3': '0.9'
    },
    'combined': {
        'trial1': '1.1',
        'trial2': '1.1',
        'trial3': '1.3'
    },
    'average_black_sand': '0.633333333333333',
    'average_pebbles': '0.9',
    'average_combined': '1.16666666666667'
}, {
    'time': '6:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.4',
        'trial3': '0.5'
    },
    'pebbles': {
        'trial1': '1',
        'trial2': '1.1',
        'trial3': '0.4'
    },
    'combined': {
        'trial1': '1',
        'trial2': '0',
        'trial3': '1'
    },
    'average_black_sand': '0.3',
    'average_pebbles': '0.833333333333333',
    'average_combined': '0.666666666666667'
}, {
    'time': '6:30',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.7',
        'trial3': '0'
    },
    'pebbles': {
        'trial1': '0',
        'trial2': '1',
        'trial3': '0'
    },
    'combined': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '1'
    },
    'average_black_sand': '0.233333333333333',
    'average_pebbles': '0.333333333333333',
    'average_combined': '0.333333333333333'
}, {
    'time': '7:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0'
    },
    'pebbles': {
        'trial1': '0',
        'trial2': '0.5',
        'trial3': '0'
    },
    'combined': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0'
    },
    'average_black_sand': '0',
    'average_pebbles': '0.166666666666667',
    'average_combined': '0'
}]

const collectorTemperature = [{
    'time': '9:00',
    'black_sand': {
        'trial1': '48.89',
        'trial2': '40.56',
        'trial3': '42.22'
    },
    'pebbles': {
        'trial1': '54.44',
        'trial2': '54.45',
        'trial3': '43.33'
    },
    'combined': {
        'trial1': '43.33',
        'trial2': '41.11',
        'trial3': '43.33'
    },
    'average_black_sand': '43.8913866666667',
    'average_pebbles': '50.74',
    'average_combined': '42.59'
}, {
    'time': '9:30',
    'black_sand': {
        'trial1': '60',
        'trial2': '48.89',
        'trial3': '51.11'
    },
    'pebbles': {
        'trial1': '59.44',
        'trial2': '60',
        'trial3': '44.44'
    },
    'combined': {
        'trial1': '48.89',
        'trial2': '44.44',
        'trial3': '48.89'
    },
    'average_black_sand': '53.3363733333333',
    'average_pebbles': '54.6266666666667',
    'average_combined': '47.4066666666667'
}, {
    'time': '10:00',
    'black_sand': {
        'trial1': '65.56',
        'trial2': '61.12',
        'trial3': '58.89'
    },
    'pebbles': {
        'trial1': '60',
        'trial2': '60',
        'trial3': '48.89'
    },
    'combined': {
        'trial1': '57.78',
        'trial2': '48.89',
        'trial3': '53.33'
    },
    'average_black_sand': '61.8553866666667',
    'average_pebbles': '56.2966666666667',
    'average_combined': '53.3333333333333'
}, {
    'time': '10:30',
    'black_sand': {
        'trial1': '58.89',
        'trial2': '70.01',
        'trial3': '60'
    },
    'pebbles': {
        'trial1': '61.11',
        'trial2': '61.12',
        'trial3': '58.89'
    },
    'combined': {
        'trial1': '60',
        'trial2': '54.44',
        'trial3': '54.44'
    },
    'average_black_sand': '62.96656',
    'average_pebbles': '60.3733333333333',
    'average_combined': '56.2933333333333'
}, {
    'time': '11:00',
    'black_sand': {
        'trial1': '64.45',
        'trial2': '72.23',
        'trial3': '48.89'
    },
    'pebbles': {
        'trial1': '63.33',
        'trial2': '63.34',
        'trial3': '63.33'
    },
    'combined': {
        'trial1': '60',
        'trial2': '60',
        'trial3': '65.56'
    },
    'average_black_sand': '61.8556266666667',
    'average_pebbles': '63.3333333333333',
    'average_combined': '61.8533333333333'
}, {
    'time': '11:30',
    'black_sand': {
        'trial1': '72.23',
        'trial2': '76.67',
        'trial3': '60'
    },
    'pebbles': {
        'trial1': '65.56',
        'trial2': '65.56',
        'trial3': '64.44'
    },
    'combined': {
        'trial1': '65.56',
        'trial2': '60',
        'trial3': '65.56'
    },
    'average_black_sand': '69.63376',
    'average_pebbles': '65.1866666666667',
    'average_combined': '63.7066666666667'
}, {
    'time': '12:00',
    'black_sand': {
        'trial1': '76.67',
        'trial2': '76.67',
        'trial3': '65.56'
    },
    'pebbles': {
        'trial1': '71.11',
        'trial2': '71.12',
        'trial3': '66.67'
    },
    'combined': {
        'trial1': '70',
        'trial2': '76.67',
        'trial3': '70'
    },
    'average_black_sand': '72.9672266666667',
    'average_pebbles': '69.6333333333333',
    'average_combined': '72.2233333333333'
}, {
    'time': '12:30',
    'black_sand': {
        'trial1': '66.67',
        'trial2': '73.34',
        'trial3': '73.33'
    },
    'pebbles': {
        'trial1': '71.11',
        'trial2': '71.12',
        'trial3': '65.56'
    },
    'combined': {
        'trial1': '71.11',
        'trial2': '82.22',
        'trial3': '76.67'
    },
    'average_black_sand': '71.11504',
    'average_pebbles': '69.2633333333333',
    'average_combined': '76.6666666666667'
}, {
    'time': '1:00',
    'black_sand': {
        'trial1': '60',
        'trial2': '76.67',
        'trial3': '76.67'
    },
    'pebbles': {
        'trial1': '77.78',
        'trial2': '77.78',
        'trial3': '66.67'
    },
    'combined': {
        'trial1': '70',
        'trial2': '82.22',
        'trial3': '77.78'
    },
    'average_black_sand': '71.11496',
    'average_pebbles': '74.0766666666667',
    'average_combined': '76.6666666666667'
}, {
    'time': '1:30',
    'black_sand': {
        'trial1': '56.67',
        'trial2': '77.78',
        'trial3': '75.56'
    },
    'pebbles': {
        'trial1': '74.45',
        'trial2': '71.12',
        'trial3': '71.11'
    },
    'combined': {
        'trial1': '71.11',
        'trial2': '82.22',
        'trial3': '71.11'
    },
    'average_black_sand': '70.0037866666667',
    'average_pebbles': '72.2266666666667',
    'average_combined': '74.8133333333333'
}, {
    'time': '2:00',
    'black_sand': {
        'trial1': '54.45',
        'trial2': '76.67',
        'trial3': '67.78'
    },
    'pebbles': {
        'trial1': '71.11',
        'trial2': '71.12',
        'trial3': '70'
    },
    'combined': {
        'trial1': '76.67',
        'trial2': '76.67',
        'trial3': '76.67'
    },
    'average_black_sand': '66.2999733333333',
    'average_pebbles': '70.7433333333333',
    'average_combined': '76.67'
}, {
    'time': '2:30',
    'black_sand': {
        'trial1': '57.78',
        'trial2': '76.67',
        'trial3': '76.67'
    },
    'pebbles': {
        'trial1': '65.56',
        'trial2': '65.56',
        'trial3': '64.44'
    },
    'combined': {
        'trial1': '73.33',
        'trial2': '71.11',
        'trial3': '76.67'
    },
    'average_black_sand': '70.37416',
    'average_pebbles': '65.1866666666667',
    'average_combined': '73.7033333333333'
}, {
    'time': '3:00',
    'black_sand': {
        'trial1': '62.23',
        'trial2': '78.9',
        'trial3': '66.67'
    },
    'pebbles': {
        'trial1': '60',
        'trial2': '63.89',
        'trial3': '60'
    },
    'combined': {
        'trial1': '73.33',
        'trial2': '65.56',
        'trial3': '76.67'
    },
    'average_black_sand': '69.2632',
    'average_pebbles': '61.2966666666667',
    'average_combined': '71.8533333333333'
}, {
    'time': '3:30',
    'black_sand': {
        'trial1': '54.45',
        'trial2': '71.12',
        'trial3': '71.11'
    },
    'pebbles': {
        'trial1': '56.11',
        'trial2': '58.89',
        'trial3': '53.33'
    },
    'combined': {
        'trial1': '67.22',
        'trial2': '64.44',
        'trial3': '76.67'
    },
    'average_black_sand': '65.5590933333333',
    'average_pebbles': '56.11',
    'average_combined': '69.4433333333333'
}, {
    'time': '4:00',
    'black_sand': {
        'trial1': '53.34',
        'trial2': '71.12',
        'trial3': '65.56'
    },
    'pebbles': {
        'trial1': '51.67',
        'trial2': '51.67',
        'trial3': '48.89'
    },
    'combined': {
        'trial1': '65.56',
        'trial2': '54.44',
        'trial3': '68.89'
    },
    'average_black_sand': '63.3368266666667',
    'average_pebbles': '50.7433333333333',
    'average_combined': '62.9633333333333'
}, {
    'time': '4:30',
    'black_sand': {
        'trial1': '43.34',
        'trial2': '60',
        'trial3': '64.44'
    },
    'pebbles': {
        'trial1': '48.89',
        'trial2': '48.34',
        'trial3': '43.33'
    },
    'combined': {
        'trial1': '60',
        'trial2': '48.89',
        'trial3': '65.56'
    },
    'average_black_sand': '55.9288533333333',
    'average_pebbles': '46.8533333333333',
    'average_combined': '58.15'
}, {
    'time': '5:00',
    'black_sand': {
        'trial1': '42.23',
        'trial2': '51.12',
        'trial3': '48.89'
    },
    'pebbles': {
        'trial1': '43.33',
        'trial2': '43.34',
        'trial3': '42.22'
    },
    'combined': {
        'trial1': '54.44',
        'trial2': '44.44',
        'trial3': '58.89'
    },
    'average_black_sand': '47.4100266666667',
    'average_pebbles': '42.9633333333333',
    'average_combined': '52.59'
}, {
    'time': '5:30',
    'black_sand': {
        'trial1': '40',
        'trial2': '43.34',
        'trial3': '43.33'
    },
    'pebbles': {
        'trial1': '37.78',
        'trial2': '41.67',
        'trial3': '40'
    },
    'combined': {
        'trial1': '45.56',
        'trial2': '43.33',
        'trial3': '54.44'
    },
    'average_black_sand': '42.22456',
    'average_pebbles': '39.8166666666667',
    'average_combined': '47.7766666666667'
}, {
    'time': '6:00',
    'black_sand': {
        'trial1': '37.78',
        'trial2': '40',
        'trial3': '40'
    },
    'pebbles': {
        'trial1': '37.78',
        'trial2': '37.78',
        'trial3': '37.78'
    },
    'combined': {
        'trial1': '42.22',
        'trial2': '38.89',
        'trial3': '48.89'
    },
    'average_black_sand': '39.26144',
    'average_pebbles': '37.78',
    'average_combined': '43.3333333333333'
}, {
    'time': '6:30',
    'black_sand': {
        'trial1': '36.67',
        'trial2': '37.78',
        'trial3': '37.78'
    },
    'pebbles': {
        'trial1': '36.67',
        'trial2': '37.78',
        'trial3': '36.67'
    },
    'combined': {
        'trial1': '38.33',
        'trial2': '37.78',
        'trial3': '44.44'
    },
    'average_black_sand': '37.4094933333333',
    'average_pebbles': '37.04',
    'average_combined': '40.1833333333333'
}, {
    'time': '7:00',
    'black_sand': {
        'trial1': '36.67',
        'trial2': '36.67',
        'trial3': '36.67'
    },
    'pebbles': {
        'trial1': '32.22',
        'trial2': '37.78',
        'trial3': '36.67'
    },
    'combined': {
        'trial1': '36.67',
        'trial2': '36.67',
        'trial3': '37.78'
    },
    'average_black_sand': '36.66872',
    'average_pebbles': '35.5566666666667',
    'average_combined': '37.04'
}]

const chimneyTemperature = [{
    'time': '9:00',
    'black_sand': {
        'trial1': '41.8',
        'trial2': '39.7',
        'trial3': '40.2'
    },
    'pebbles': {
        'trial1': '37.6',
        'trial2': '37.6',
        'trial3': '33.8'
    },
    'combined': {
        'trial1': '34.1',
        'trial2': '33.4',
        'trial3': '33.8'
    },
    'average_black_sand': '40.5666666666667',
    'average_pebbles': '36.3333333333333',
    'average_combined': '33.7666666666667'
}, {
    'time': '9:30',
    'black_sand': {
        'trial1': '42.9',
        'trial2': '43.1',
        'trial3': '43.8'
    },
    'pebbles': {
        'trial1': '40.6',
        'trial2': '39.7',
        'trial3': '34.7'
    },
    'combined': {
        'trial1': '35.8',
        'trial2': '34.7',
        'trial3': '35.5'
    },
    'average_black_sand': '43.2666666666667',
    'average_pebbles': '38.3333333333333',
    'average_combined': '35.3333333333333'
}, {
    'time': '10:00',
    'black_sand': {
        'trial1': '44.5',
        'trial2': '47.7',
        'trial3': '45'
    },
    'pebbles': {
        'trial1': '39.5',
        'trial2': '39.5',
        'trial3': '37.2'
    },
    'combined': {
        'trial1': '40.1',
        'trial2': '36',
        'trial3': '36.8'
    },
    'average_black_sand': '45.7333333333333',
    'average_pebbles': '38.7333333333333',
    'average_combined': '37.6333333333333'
}, {
    'time': '10:30',
    'black_sand': {
        'trial1': '40.3',
        'trial2': '50.1',
        'trial3': '40.5'
    },
    'pebbles': {
        'trial1': '40',
        'trial2': '40',
        'trial3': '39.1'
    },
    'combined': {
        'trial1': '40.4',
        'trial2': '38.1',
        'trial3': '37.3'
    },
    'average_black_sand': '43.6333333333333',
    'average_pebbles': '39.7',
    'average_combined': '38.6'
}, {
    'time': '11:00',
    'black_sand': {
        'trial1': '46.4',
        'trial2': '50',
        'trial3': '36.1'
    },
    'pebbles': {
        'trial1': '42.6',
        'trial2': '42.6',
        'trial3': '39.4'
    },
    'combined': {
        'trial1': '37.7',
        'trial2': '40.1',
        'trial3': '44.8'
    },
    'average_black_sand': '44.1666666666667',
    'average_pebbles': '41.5333333333333',
    'average_combined': '40.8666666666667'
}, {
    'time': '11:30',
    'black_sand': {
        'trial1': '48.1',
        'trial2': '50',
        'trial3': '42'
    },
    'pebbles': {
        'trial1': '43.7',
        'trial2': '43.8',
        'trial3': '39.9'
    },
    'combined': {
        'trial1': '41.5',
        'trial2': '45.8',
        'trial3': '44.1'
    },
    'average_black_sand': '46.7',
    'average_pebbles': '42.4666666666667',
    'average_combined': '43.8'
}, {
    'time': '12:00',
    'black_sand': {
        'trial1': '47.5',
        'trial2': '50',
        'trial3': '46.4'
    },
    'pebbles': {
        'trial1': '46.5',
        'trial2': '46.5',
        'trial3': '44.6'
    },
    'combined': {
        'trial1': '43.8',
        'trial2': '48.4',
        'trial3': '44.6'
    },
    'average_black_sand': '47.9666666666667',
    'average_pebbles': '45.8666666666667',
    'average_combined': '45.6'
}, {
    'time': '12:30',
    'black_sand': {
        'trial1': '44.5',
        'trial2': '47.4',
        'trial3': '50'
    },
    'pebbles': {
        'trial1': '46.7',
        'trial2': '46.7',
        'trial3': '44.3'
    },
    'combined': {
        'trial1': '44.4',
        'trial2': '50',
        'trial3': '46.6'
    },
    'average_black_sand': '47.3',
    'average_pebbles': '45.9',
    'average_combined': '47'
}, {
    'time': '1:00',
    'black_sand': {
        'trial1': '39.9',
        'trial2': '50',
        'trial3': '50'
    },
    'pebbles': {
        'trial1': '50',
        'trial2': '50',
        'trial3': '45.5'
    },
    'combined': {
        'trial1': '46.8',
        'trial2': '50',
        'trial3': '48'
    },
    'average_black_sand': '46.6333333333333',
    'average_pebbles': '48.5',
    'average_combined': '48.2666666666667'
}, {
    'time': '1:30',
    'black_sand': {
        'trial1': '39',
        'trial2': '50',
        'trial3': '50'
    },
    'pebbles': {
        'trial1': '45',
        'trial2': '45',
        'trial3': '48.5'
    },
    'combined': {
        'trial1': '46.6',
        'trial2': '50.3',
        'trial3': '43.5'
    },
    'average_black_sand': '46.3333333333333',
    'average_pebbles': '46.1666666666667',
    'average_combined': '46.8'
}, {
    'time': '2:00',
    'black_sand': {
        'trial1': '38',
        'trial2': '50',
        'trial3': '46'
    },
    'pebbles': {
        'trial1': '37.9',
        'trial2': '37.8',
        'trial3': '47.9'
    },
    'combined': {
        'trial1': '47.3',
        'trial2': '47.7',
        'trial3': '48'
    },
    'average_black_sand': '44.6666666666667',
    'average_pebbles': '41.2',
    'average_combined': '47.6666666666667'
}, {
    'time': '2:30',
    'black_sand': {
        'trial1': '40.1',
        'trial2': '50',
        'trial3': '50.4'
    },
    'pebbles': {
        'trial1': '47.1',
        'trial2': '47',
        'trial3': '42.9'
    },
    'combined': {
        'trial1': '45.9',
        'trial2': '43.4',
        'trial3': '50'
    },
    'average_black_sand': '46.8333333333333',
    'average_pebbles': '45.6666666666667',
    'average_combined': '46.4333333333333'
}, {
    'time': '3:00',
    'black_sand': {
        'trial1': '42.2',
        'trial2': '50',
        'trial3': '45.5'
    },
    'pebbles': {
        'trial1': '45.9',
        'trial2': '45.9',
        'trial3': '39.8'
    },
    'combined': {
        'trial1': '45.4',
        'trial2': '41.2',
        'trial3': '48.2'
    },
    'average_black_sand': '45.9',
    'average_pebbles': '43.8666666666667',
    'average_combined': '44.9333333333333'
}, {
    'time': '3:30',
    'black_sand': {
        'trial1': '36.9',
        'trial2': '49.4',
        'trial3': '48'
    },
    'pebbles': {
        'trial1': '41.6',
        'trial2': '41.6',
        'trial3': '36.3'
    },
    'combined': {
        'trial1': '43.3',
        'trial2': '39.5',
        'trial3': '46.6'
    },
    'average_black_sand': '44.7666666666667',
    'average_pebbles': '39.8333333333333',
    'average_combined': '43.1333333333333'
}, {
    'time': '4:00',
    'black_sand': {
        'trial1': '37.4',
        'trial2': '46.4',
        'trial3': '44.5'
    },
    'pebbles': {
        'trial1': '37',
        'trial2': '37',
        'trial3': '34.4'
    },
    'combined': {
        'trial1': '42.7',
        'trial2': '35.8',
        'trial3': '45.3'
    },
    'average_black_sand': '42.7666666666667',
    'average_pebbles': '36.1333333333333',
    'average_combined': '41.2666666666667'
}, {
    'time': '4:30',
    'black_sand': {
        'trial1': '33.1',
        'trial2': '36.2',
        'trial3': '43.1'
    },
    'pebbles': {
        'trial1': '33.8',
        'trial2': '33.8',
        'trial3': '31'
    },
    'combined': {
        'trial1': '39.9',
        'trial2': '33.1',
        'trial3': '44.5'
    },
    'average_black_sand': '37.4666666666667',
    'average_pebbles': '32.8666666666667',
    'average_combined': '39.1666666666667'
}, {
    'time': '5:00',
    'black_sand': {
        'trial1': '30.7',
        'trial2': '34.2',
        'trial3': '36.6'
    },
    'pebbles': {
        'trial1': '30.9',
        'trial2': '31',
        'trial3': '30.2'
    },
    'combined': {
        'trial1': '37.9',
        'trial2': '31.1',
        'trial3': '40.6'
    },
    'average_black_sand': '33.8333333333333',
    'average_pebbles': '30.7',
    'average_combined': '36.5333333333333'
}, {
    'time': '5:30',
    'black_sand': {
        'trial1': '29.7',
        'trial2': '32.1',
        'trial3': '31.9'
    },
    'pebbles': {
        'trial1': '29',
        'trial2': '29.2',
        'trial3': '29'
    },
    'combined': {
        'trial1': '32.1',
        'trial2': '29.2',
        'trial3': '38'
    },
    'average_black_sand': '31.2333333333333',
    'average_pebbles': '29.0666666666667',
    'average_combined': '33.1'
}, {
    'time': '6:00',
    'black_sand': {
        'trial1': '28.3',
        'trial2': '29.9',
        'trial3': '29.8'
    },
    'pebbles': {
        'trial1': '27.9',
        'trial2': '27.9',
        'trial3': '27.5'
    },
    'combined': {
        'trial1': '28.9',
        'trial2': '27.7',
        'trial3': '36.6'
    },
    'average_black_sand': '29.3333333333333',
    'average_pebbles': '27.7666666666667',
    'average_combined': '31.0666666666667'
}, {
    'time': '6:30',
    'black_sand': {
        'trial1': '26.4',
        'trial2': '28.3',
        'trial3': '27.8'
    },
    'pebbles': {
        'trial1': '26.3',
        'trial2': '27.6',
        'trial3': '26.8'
    },
    'combined': {
        'trial1': '27',
        'trial2': '26.6',
        'trial3': '31.6'
    },
    'average_black_sand': '27.5',
    'average_pebbles': '26.9',
    'average_combined': '28.4'
}, {
    'time': '7:00',
    'black_sand': {
        'trial1': '26',
        'trial2': '27.2',
        'trial3': '26'
    },
    'pebbles': {
        'trial1': '26',
        'trial2': '26.5',
        'trial3': '25.6'
    },
    'combined': {
        'trial1': '25.6',
        'trial2': '26',
        'trial3': '27.4'
    },
    'average_black_sand': '26.4',
    'average_pebbles': '26.0333333333333',
    'average_combined': '26.3333333333333'
}]

const density = [{
    'time': '9:00',
    'black_sand': {
        'trial1': '1.09678',
        'trial2': '1.1251',
        'trial3': '1.11944'
    },
    'pebbles': {
        'trial1': '1.07833',
        'trial2': '1.07833',
        'trial3': '1.11567'
    },
    'combined': {
        'trial1': '1.11567',
        'trial2': '1.12322',
        'trial3': '1.11567'
    },
    'average_black_sand': '1.11377371792593',
    'average_pebbles': '1.09077777777778',
    'average_combined': '1.11818518518519'
}, {
    'time': '9:30',
    'black_sand': {
        'trial1': '1.06',
        'trial2': '1.09676',
        'trial3': '1.08933'
    },
    'pebbles': {
        'trial1': '1.06183',
        'trial2': '1.06',
        'trial3': '1.11189'
    },
    'combined': {
        'trial1': '1.09678',
        'trial2': '1.11189',
        'trial3': '1.09678'
    },
    'average_black_sand': '1.08203215466667',
    'average_pebbles': '1.07790740740741',
    'average_combined': '1.10181481481482'
}, {
    'time': '10:00',
    'black_sand': {
        'trial1': '1.04333',
        'trial2': '1.05665',
        'trial3': '1.06367'
    },
    'pebbles': {
        'trial1': '1.06',
        'trial2': '1.06',
        'trial3': '1.09678'
    },
    'combined': {
        'trial1': '1.06733',
        'trial2': '1.09678',
        'trial3': '1.082'
    },
    'average_black_sand': '1.05455014844444',
    'average_pebbles': '1.07225925925926',
    'average_combined': '1.08203703703704'
}, {
    'time': '10:30',
    'black_sand': {
        'trial1': '1.06367',
        'trial2': '1.02998',
        'trial3': '1.06'
    },
    'pebbles': {
        'trial1': '1.05667',
        'trial2': '1.05667',
        'trial3': '1.06367'
    },
    'combined': {
        'trial1': '1.06',
        'trial2': '1.07833',
        'trial3': '1.07833'
    },
    'average_black_sand': '1.05121614222222',
    'average_pebbles': '1.059',
    'average_combined': '1.07222222222222'
}, {
    'time': '11:00',
    'black_sand': {
        'trial1': '1.04667',
        'trial2': '1.02332',
        'trial3': '1.09678'
    },
    'pebbles': {
        'trial1': '1.05',
        'trial2': '1.05',
        'trial3': '1.05'
    },
    'combined': {
        'trial1': '1.06',
        'trial2': '1.06',
        'trial3': '1.04333'
    },
    'average_black_sand': '1.05558637155556',
    'average_pebbles': '1.05',
    'average_combined': '1.05444444444444'
}, {
    'time': '11:30',
    'black_sand': {
        'trial1': '1.02333',
        'trial2': '1.00998',
        'trial3': '1.06'
    },
    'pebbles': {
        'trial1': '1.04333',
        'trial2': '1.04333',
        'trial3': '1.04667'
    },
    'combined': {
        'trial1': '1.04333',
        'trial2': '1.06',
        'trial3': '1.04333'
    },
    'average_black_sand': '1.03110449777778',
    'average_pebbles': '1.04444444444444',
    'average_combined': '1.04888888888889'
}, {
    'time': '12:00',
    'black_sand': {
        'trial1': '1.01',
        'trial2': '1.00998',
        'trial3': '1.04333'
    },
    'pebbles': {
        'trial1': '1.02667',
        'trial2': '1.02667',
        'trial3': '1.04'
    },
    'combined': {
        'trial1': '1.03',
        'trial2': '1.01',
        'trial3': '1.03'
    },
    'average_black_sand': '1.02110445333333',
    'average_pebbles': '1.03111111111111',
    'average_combined': '1.02333333333333'
}, {
    'time': '12:30',
    'black_sand': {
        'trial1': '1.04',
        'trial2': '1.01998',
        'trial3': '1.02'
    },
    'pebbles': {
        'trial1': '1.02667',
        'trial2': '1.02667',
        'trial3': '1.04333'
    },
    'combined': {
        'trial1': '1.02667',
        'trial2': '0.99408',
        'trial3': '1.01'
    },
    'average_black_sand': '1.02666021333333',
    'average_pebbles': '1.03222222222222',
    'average_combined': '1.01024814814815'
}, {
    'time': '1:00',
    'black_sand': {
        'trial1': '1.06',
        'trial2': '1.00998',
        'trial3': '1.01'
    },
    'pebbles': {
        'trial1': '1.00667',
        'trial2': '1.00667',
        'trial3': '1.04'
    },
    'combined': {
        'trial1': '1.03',
        'trial2': '0.99408',
        'trial3': '1.00667'
    },
    'average_black_sand': '1.02665992',
    'average_pebbles': '1.01777777777778',
    'average_combined': '1.01024814814815'
}, {
    'time': '1:30',
    'black_sand': {
        'trial1': '1.071',
        'trial2': '1.00665',
        'trial3': '1.01333'
    },
    'pebbles': {
        'trial1': '1.01667',
        'trial2': '1.02667',
        'trial3': '1.02667'
    },
    'combined': {
        'trial1': '1.02667',
        'trial2': '0.99408',
        'trial3': '1.02667'
    },
    'average_black_sand': '1.03032650666667',
    'average_pebbles': '1.02333333333333',
    'average_combined': '1.01580370370371'
}, {
    'time': '2:00',
    'black_sand': {
        'trial1': '1.07833',
        'trial2': '1.00998',
        'trial3': '1.03667'
    },
    'pebbles': {
        'trial1': '1.02667',
        'trial2': '1.02667',
        'trial3': '1.03'
    },
    'combined': {
        'trial1': '1.01',
        'trial2': '1.01',
        'trial3': '1.01'
    },
    'average_black_sand': '1.04165999111111',
    'average_pebbles': '1.02777777777778',
    'average_combined': '1.01'
}, {
    'time': '2:30',
    'black_sand': {
        'trial1': '1.06733',
        'trial2': '1.00998',
        'trial3': '1.01'
    },
    'pebbles': {
        'trial1': '1.04333',
        'trial2': '1.04333',
        'trial3': '1.04667'
    },
    'combined': {
        'trial1': '1.02',
        'trial2': '1.02667',
        'trial3': '1.01'
    },
    'average_black_sand': '1.02910436444444',
    'average_pebbles': '1.04444444444444',
    'average_combined': '1.01888888888889'
}, {
    'time': '3:00',
    'black_sand': {
        'trial1': '1.05333',
        'trial2': '1.00331',
        'trial3': '1.04'
    },
    'pebbles': {
        'trial1': '1.06',
        'trial2': '1.04833',
        'trial3': '1.06'
    },
    'combined': {
        'trial1': '1.02',
        'trial2': '1.04333',
        'trial3': '1.01'
    },
    'average_black_sand': '1.03221537777778',
    'average_pebbles': '1.05611111111111',
    'average_combined': '1.02444444444444'
}, {
    'time': '3:30',
    'black_sand': {
        'trial1': '1.07833',
        'trial2': '1.02665',
        'trial3': '1.02666'
    },
    'pebbles': {
        'trial1': '1.07283',
        'trial2': '1.06367',
        'trial3': '1.082'
    },
    'combined': {
        'trial1': '1.03833',
        'trial2': '1.04667',
        'trial3': '1.01'
    },
    'average_black_sand': '1.04388263111111',
    'average_pebbles': '1.07283333333333',
    'average_combined': '1.03166666666667'
}, {
    'time': '4:00',
    'black_sand': {
        'trial1': '1.082',
        'trial2': '1.02665',
        'trial3': '1.04333'
    },
    'pebbles': {
        'trial1': '1.0875',
        'trial2': '1.0875',
        'trial3': '1.09678'
    },
    'combined': {
        'trial1': '1.04333',
        'trial2': '1.07833',
        'trial3': '1.03333'
    },
    'average_black_sand': '1.05066045333333',
    'average_pebbles': '1.09059259259259',
    'average_combined': '1.05166666666666'
}, {
    'time': '4:30',
    'black_sand': {
        'trial1': '1.11567',
        'trial2': '1.05999',
        'trial3': '1.04667'
    },
    'pebbles': {
        'trial1': '1.09678',
        'trial2': '1.09867',
        'trial3': '1.11567'
    },
    'combined': {
        'trial1': '1.06',
        'trial2': '1.09678',
        'trial3': '1.04333'
    },
    'average_black_sand': '1.07410579555556',
    'average_pebbles': '1.1037037037037',
    'average_combined': '1.0667037037037'
}, {
    'time': '5:00',
    'black_sand': {
        'trial1': '1.11944',
        'trial2': '1.08932',
        'trial3': '1.09678'
    },
    'pebbles': {
        'trial1': '1.11567',
        'trial2': '1.11567',
        'trial3': '1.11944'
    },
    'combined': {
        'trial1': '1.07833',
        'trial2': '1.11189',
        'trial3': '1.06367'
    },
    'average_black_sand': '1.10184691081481',
    'average_pebbles': '1.11692592592593',
    'average_combined': '1.08462962962963'
}, {
    'time': '5:30',
    'black_sand': {
        'trial1': '1.127',
        'trial2': '1.11565',
        'trial3': '1.11567'
    },
    'pebbles': {
        'trial1': '1.13522',
        'trial2': '1.12133',
        'trial3': '1.127'
    },
    'combined': {
        'trial1': '1.10811',
        'trial2': '1.11567',
        'trial3': '1.07833'
    },
    'average_black_sand': '1.11944012266667',
    'average_pebbles': '1.12785185185185',
    'average_combined': '1.1007037037037'
}, {
    'time': '6:00',
    'black_sand': {
        'trial1': '1.13522',
        'trial2': '1.12699',
        'trial3': '1.127'
    },
    'pebbles': {
        'trial1': '1.13522',
        'trial2': '1.13522',
        'trial3': '1.13522'
    },
    'combined': {
        'trial1': '1.11944',
        'trial2': '1.13111',
        'trial3': '1.09678'
    },
    'average_black_sand': '1.12973675140741',
    'average_pebbles': '1.13522222222222',
    'average_combined': '1.11577777777778'
}, {
    'time': '6:30',
    'black_sand': {
        'trial1': '1.13933',
        'trial2': '1.13521',
        'trial3': '1.13522'
    },
    'pebbles': {
        'trial1': '1.13933',
        'trial2': '1.13522',
        'trial3': '1.13933'
    },
    'combined': {
        'trial1': '1.13317',
        'trial2': '1.13522',
        'trial3': '1.11189'
    },
    'average_black_sand': '1.13658849244444',
    'average_pebbles': '1.13796296296296',
    'average_combined': '1.12675925925926'
}, {
    'time': '7:00',
    'black_sand': {
        'trial1': '1.13933',
        'trial2': '1.13932',
        'trial3': '1.13933'
    },
    'pebbles': {
        'trial1': '1.15578',
        'trial2': '1.13522',
        'trial3': '1.13933'
    },
    'combined': {
        'trial1': '1.13933',
        'trial2': '1.13933',
        'trial3': '1.13522'
    },
    'average_black_sand': '1.13932935377778',
    'average_pebbles': '1.14344444444444',
    'average_combined': '1.13796296296296'
}]

const power = [{
    'time': '9:00',
    'black_sand': {
        'trial1': '0.01023',
        'trial2': '0.00825',
        'trial3': '0.00821'
    },
    'pebbles': {
        'trial1': '0.01006',
        'trial2': '0.00791',
        'trial3': '0.00474'
    },
    'combined': {
        'trial1': '0.00818',
        'trial2': '0.00824',
        'trial3': '0.00818'
    },
    'average_black_sand': '0.00889837819797561',
    'average_pebbles': '0.00756979625623722',
    'average_combined': '0.00820283190272'
}, {
    'time': '9:30',
    'black_sand': {
        'trial1': '0.01235',
        'trial2': '0.01023',
        'trial3': '0.01016'
    },
    'pebbles': {
        'trial1': '0.0099',
        'trial2': '0.00989',
        'trial3': '0.00816'
    },
    'combined': {
        'trial1': '0.00805',
        'trial2': '0.00816',
        'trial3': '0.00805'
    },
    'average_black_sand': '0.0109124836523759',
    'average_pebbles': '0.00931557615860445',
    'average_combined': '0.00808274142208'
}, {
    'time': '10:00',
    'black_sand': {
        'trial1': '0.00973',
        'trial2': '0.01514',
        'trial3': '0.01239'
    },
    'pebbles': {
        'trial1': '0.00989',
        'trial2': '0.00989',
        'trial3': '0.0062'
    },
    'combined': {
        'trial1': '0.00995',
        'trial2': '0.01023',
        'trial3': '0.01009'
    },
    'average_black_sand': '0.0124204169705198',
    'average_pebbles': '0.00865676444155852',
    'average_combined': '0.0100920297731259'
}, {
    'time': '10:30',
    'black_sand': {
        'trial1': '0.02218',
        'trial2': '0.01476',
        'trial3': '0.00989'
    },
    'pebbles': {
        'trial1': '0.01514',
        'trial2': '0.00986',
        'trial3': '0.01524'
    },
    'combined': {
        'trial1': '0.01235',
        'trial2': '0.01006',
        'trial3': '0.01006'
    },
    'average_black_sand': '0.01560961786631',
    'average_pebbles': '0.0134117192363556',
    'average_combined': '0.0108209875880889'
}, {
    'time': '11:00',
    'black_sand': {
        'trial1': '0.01219',
        'trial2': '0.01466',
        'trial3': '0.00805'
    },
    'pebbles': {
        'trial1': '0.01504',
        'trial2': '0.00979',
        'trial3': '0.01504'
    },
    'combined': {
        'trial1': '0.00599',
        'trial2': '0.00989',
        'trial3': '0.01495'
    },
    'average_black_sand': '0.0116334462586571',
    'average_pebbles': '0.013293882056',
    'average_combined': '0.0102748936368'
}, {
    'time': '11:30',
    'black_sand': {
        'trial1': '0.01192',
        'trial2': '0.01756',
        'trial3': '0.01235'
    },
    'pebbles': {
        'trial1': '0.01215',
        'trial2': '0.01215',
        'trial3': '0.02183'
    },
    'combined': {
        'trial1': '0.01814',
        'trial2': '0.01519',
        'trial3': '0.01215'
    },
    'average_black_sand': '0.0139436891631222',
    'average_pebbles': '0.0153793569880889',
    'average_combined': '0.015161168464'
}, {
    'time': '12:00',
    'black_sand': {
        'trial1': '0.01177',
        'trial2': '0.02107',
        'trial3': '0.00973'
    },
    'pebbles': {
        'trial1': '0.01471',
        'trial2': '0.01471',
        'trial3': '0.02575'
    },
    'combined': {
        'trial1': '0.01476',
        'trial2': '0.02941',
        'trial3': '0.01476'
    },
    'average_black_sand': '0.0141872721907754',
    'average_pebbles': '0.0183895340928',
    'average_combined': '0.0196416228250667'
}, {
    'time': '12:30',
    'black_sand': {
        'trial1': '0.01212',
        'trial2': '0.01461',
        'trial3': '0.01188'
    },
    'pebbles': {
        'trial1': '0.01785',
        'trial2': '0.01785',
        'trial3': '0.01814'
    },
    'combined': {
        'trial1': '0.01471',
        'trial2': '0.03376',
        'trial3': '0.02501'
    },
    'average_black_sand': '0.012870381089081',
    'average_pebbles': '0.0179489683683556',
    'average_combined': '0.0244923536523852'
}, {
    'time': '1:00',
    'black_sand': {
        'trial1': '0.00989',
        'trial2': '0.02501',
        'trial3': '0.02501'
    },
    'pebbles': {
        'trial1': '0.02492',
        'trial2': '0.02492',
        'trial3': '0.01212'
    },
    'combined': {
        'trial1': '0.02148',
        'trial2': '0.02895',
        'trial3': '0.02492'
    },
    'average_black_sand': '0.0199660357457691',
    'average_pebbles': '0.0206540230485333',
    'average_combined': '0.0251174106450068'
}, {
    'time': '1:30',
    'black_sand': {
        'trial1': '0.00605',
        'trial2': '0.02931',
        'trial3': '0.02509'
    },
    'pebbles': {
        'trial1': '0.01768',
        'trial2': '0.01785',
        'trial3': '0.01785'
    },
    'combined': {
        'trial1': '0.02141',
        'trial2': '0.02461',
        'trial3': '0.02141'
    },
    'average_black_sand': '0.0201507154677242',
    'average_pebbles': '0.0177944024405333',
    'average_combined': '0.0224794485429049'
}, {
    'time': '2:00',
    'black_sand': {
        'trial1': '0.00791',
        'trial2': '0.02107',
        'trial3': '0.02162'
    },
    'pebbles': {
        'trial1': '0.01471',
        'trial2': '0.01471',
        'trial3': '0.01476'
    },
    'combined': {
        'trial1': '0.02941',
        'trial2': '0.01756',
        'trial3': '0.02107'
    },
    'average_black_sand': '0.0168658393399774',
    'average_pebbles': '0.014725815',
    'average_combined': '0.0226792480234667'
}, {
    'time': '2:30',
    'black_sand': {
        'trial1': '0.00783',
        'trial2': '0.01447',
        'trial3': '0.01756'
    },
    'pebbles': {
        'trial1': '0.01814',
        'trial2': '0.01814',
        'trial3': '0.01219'
    },
    'combined': {
        'trial1': '0.01774',
        'trial2': '0.01471',
        'trial3': '0.02501'
    },
    'average_black_sand': '0.0132877155934417',
    'average_pebbles': '0.0161590073770667',
    'average_combined': '0.0191507977024'
}, {
    'time': '3:00',
    'black_sand': {
        'trial1': '0.01227',
        'trial2': '0.01745',
        'trial3': '0.0149'
    },
    'pebbles': {
        'trial1': '0.01843',
        'trial2': '0.01823',
        'trial3': '0.00989'
    },
    'combined': {
        'trial1': '0.01774',
        'trial2': '0.01215',
        'trial3': '0.01756'
    },
    'average_black_sand': '0.0148725135500206',
    'average_pebbles': '0.0155158663249778',
    'average_combined': '0.0158176113934222'
}, {
    'time': '3:30',
    'black_sand': {
        'trial1': '0.00791',
        'trial2': '0.01471',
        'trial3': '0.01785'
    },
    'pebbles': {
        'trial1': '0.01866',
        'trial2': '0.0185',
        'trial3': '0.00794'
    },
    'combined': {
        'trial1': '0.0121',
        'trial2': '0.00976',
        'trial3': '0.02501'
    },
    'average_black_sand': '0.0134908235331602',
    'average_pebbles': '0.0150294232746667',
    'average_combined': '0.0156212624764445'
}, {
    'time': '4:00',
    'black_sand': {
        'trial1': '0.00611',
        'trial2': '0.02141',
        'trial3': '0.01814'
    },
    'pebbles': {
        'trial1': '0.00798',
        'trial2': '0.00798',
        'trial3': '0.00805'
    },
    'combined': {
        'trial1': '0.01215',
        'trial2': '0.01006',
        'trial3': '0.01481'
    },
    'average_black_sand': '0.015222949137652',
    'average_pebbles': '0.00800041695232',
    'average_combined': '0.0123389133954667'
}, {
    'time': '4:30',
    'black_sand': {
        'trial1': '0.0063',
        'trial2': '0.01843',
        'trial3': '0.00976'
    },
    'pebbles': {
        'trial1': '0.0062',
        'trial2': '0.00621',
        'trial3': '0.0063'
    },
    'combined': {
        'trial1': '0.00989',
        'trial2': '0.0062',
        'trial3': '0.01215'
    },
    'average_black_sand': '0.0114992983598474',
    'average_pebbles': '0.00623644210607408',
    'average_combined': '0.00941254692298075'
}, {
    'time': '5:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.01561',
        'trial3': '0.0062'
    },
    'pebbles': {
        'trial1': '0.00474',
        'trial2': '0.0063',
        'trial3': '0.01044'
    },
    'combined': {
        'trial1': '0.01256',
        'trial2': '0.00628',
        'trial3': '0.01239'
    },
    'average_black_sand': '0.00726829282051933',
    'average_pebbles': '0.0071604266691437',
    'average_combined': '0.0104116512439526'
}, {
    'time': '5:30',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.0063',
        'trial3': '0.00242'
    },
    'pebbles': {
        'trial1': '0.00351',
        'trial2': '0.00347',
        'trial3': '0.00349'
    },
    'combined': {
        'trial1': '0.00626',
        'trial2': '0.0063',
        'trial3': '0.01006'
    },
    'average_black_sand': '0.00290965459383912',
    'average_pebbles': '0.00349048619712',
    'average_combined': '0.00754095674445628'
}, {
    'time': '6:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.00031',
        'trial3': '0.0006'
    },
    'pebbles': {
        'trial1': '0.00482',
        'trial2': '0.00641',
        'trial3': '0.00031'
    },
    'combined': {
        'trial1': '0.00475',
        'trial2': '0',
        'trial3': '0.00466'
    },
    'average_black_sand': '0.000301417947469517',
    'average_pebbles': '0.00384743672945185',
    'average_combined': '0.00313616129185185'
}, {
    'time': '6:30',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.00165',
        'trial3': '0'
    },
    'pebbles': {
        'trial1': '0',
        'trial2': '0.00482',
        'trial3': '0'
    },
    'combined': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0.00472'
    },
    'average_black_sand': '0.000551005344098227',
    'average_pebbles': '0.00160644539851852',
    'average_combined': '0.00157342655407407'
}, {
    'time': '7:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0'
    },
    'pebbles': {
        'trial1': '0',
        'trial2': '0.0006',
        'trial3': '0'
    },
    'combined': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0'
    },
    'average_black_sand': '0',
    'average_pebbles': '0.000200805674814815',
    'average_combined': '0'
}]

const auc = [{
    'time': '9:00',
    'black_sand': {
        'trial1': '0.54186',
        'trial2': '0.44359',
        'trial3': '0.44093'
    },
    'pebbles': {
        'trial1': '-0.00116',
        'trial2': '0.42713',
        'trial3': '0.30943'
    },
    'combined': {
        'trial1': '0.38952352677888',
        'trial2': '0.39351422582784',
        'trial3': '0.38952352677888'
    },
    'average_black_sand': '0.475460684408437',
    'average_pebbles': '0.245132754360437',
    'average_combined': '0.3908537597952'
}, {
    'time': '9:30',
    'black_sand': {
        'trial1': '0.5299',
        'trial2': '0.60885',
        'trial3': '0.54122'
    },
    'pebbles': {
        'trial1': '0.47496',
        'trial2': '0.47455',
        'trial3': '0.34449'
    },
    'combined': {
        'trial1': '0.432016334297599',
        'trial2': '0.441267795643306',
        'trial3': '0.435299396113919'
    },
    'average_black_sand': '0.559989614949497',
    'average_pebbles': '0.43133617440391',
    'average_combined': '0.436194508684941'
}, {
    'time': '10:00',
    'black_sand': {
        'trial1': '0.76598',
        'trial2': '0.71753',
        'trial3': '0.53465'
    },
    'pebbles': {
        'trial1': '0.60063',
        'trial2': '0.47381',
        'trial3': '0.5145'
    },
    'combined': {
        'trial1': '0.53526915143936',
        'trial2': '0.486888016032427',
        'trial3': '0.483580082535681'
    },
    'average_black_sand': '0.672720836083916',
    'average_pebbles': '0.529643608269938',
    'average_combined': '0.501912416669156'
}, {
    'time': '10:30',
    'black_sand': {
        'trial1': '0.82506',
        'trial2': '0.70606',
        'trial3': '0.43037'
    },
    'pebbles': {
        'trial1': '0.72441',
        'trial2': '0.47157',
        'trial3': '0.72682'
    },
    'combined': {
        'trial1': '0.44009968704',
        'trial2': '0.478655489811201',
        'trial3': '0.600148271340801'
    },
    'average_black_sand': '0.653833538999209',
    'average_pebbles': '0.640934431016534',
    'average_combined': '0.506301149397334'
}, {
    'time': '11:00',
    'black_sand': {
        'trial1': '0.57872',
        'trial2': '0.77338',
        'trial3': '0.48945'
    },
    'pebbles': {
        'trial1': '0.65275',
        'trial2': '0.52673',
        'trial3': '0.88499'
    },
    'combined': {
        'trial1': '0.57916011645439',
        'trial2': '0.601775572070389',
        'trial3': '0.650460782732788'
    },
    'average_black_sand': '0.613851250122691',
    'average_pebbles': '0.688157737058121',
    'average_combined': '0.610465490419189'
}, {
    'time': '11:30',
    'black_sand': {
        'trial1': '0.56847',
        'trial2': '0.92706',
        'trial3': '0.5299'
    },
    'pebbles': {
        'trial1': '0.64473',
        'trial2': '0.64473',
        'trial3': '1.1419'
    },
    'combined': {
        'trial1': '0.789595929075213',
        'trial2': '1.07032916340482',
        'trial3': '0.645875880332811'
    },
    'average_black_sand': '0.675143072493552',
    'average_pebbles': '0.810453385941347',
    'average_combined': '0.835266990937614'
}, {
    'time': '12:00',
    'black_sand': {
        'trial1': '0.57313',
        'trial2': '0.8563',
        'trial3': '0.51871'
    },
    'pebbles': {
        'trial1': '0.78149',
        'trial2': '0.78149',
        'trial3': '1.05338'
    },
    'combined': {
        'trial1': '0.70722119520001',
        'trial2': '1.51609601622615',
        'trial3': '0.954329094950414'
    },
    'average_black_sand': '0.649383678716562',
    'average_pebbles': '0.872124059067746',
    'average_combined': '1.05921543545886'
}, {
    'time': '12:30',
    'black_sand': {
        'trial1': '-0.02296',
        'trial2': '-0.04134',
        'trial3': '-0.03849'
    },
    'pebbles': {
        'trial1': '-0.04464',
        'trial2': '-0.04464',
        'trial3': '-0.03157'
    },
    'combined': {
        'trial1': '-0.0377662619052522',
        'trial2': '-0.0654334310577141',
        'trial3': '-0.0521004387506087'
    },
    'average_black_sand': '-0.0342640871320175',
    'average_pebbles': '-0.040281382348058',
    'average_combined': '-0.0517667105711917'
}, {
    'time': '1:00',
    'black_sand': {
        'trial1': '0.38252',
        'trial2': '1.30362',
        'trial3': '1.20227'
    },
    'pebbles': {
        'trial1': '1.02245',
        'trial2': '1.02662',
        'trial3': '0.71922'
    },
    'combined': {
        'trial1': '1.0295045131904',
        'trial2': '1.28538666745604',
        'trial3': '1.1120826808832'
    },
    'average_black_sand': '0.96280202912384',
    'average_pebbles': '0.9227622117376',
    'average_combined': '1.14232462050988'
}, {
    'time': '1:30',
    'black_sand': {
        'trial1': '0.33509',
        'trial2': '1.20905',
        'trial3': '1.12105'
    },
    'pebbles': {
        'trial1': '0.77732',
        'trial2': '0.78149',
        'trial3': '0.78264'
    },
    'combined': {
        'trial1': '1.2197473967744',
        'trial2': '1.01218563192115',
        'trial3': '1.0194931240832'
    },
    'average_black_sand': '0.888397315384839',
    'average_pebbles': '0.7804852185728',
    'average_combined': '1.08380871759292'
}, {
    'time': '2:00',
    'black_sand': {
        'trial1': '0.37777',
        'trial2': '0.85287',
        'trial3': '0.94042'
    },
    'pebbles': {
        'trial1': '0.78845',
        'trial2': '0.78845',
        'trial3': '0.64681'
    },
    'combined': {
        'trial1': '1.13150398782718',
        'trial2': '0.774538769971187',
        'trial3': '1.10572053446398'
    },
    'average_black_sand': '0.723685318402046',
    'average_pebbles': '0.741235737049588',
    'average_combined': '1.00392109742078'
}, {
    'time': '2:30',
    'black_sand': {
        'trial1': '0.4824',
        'trial2': '0.76601',
        'trial3': '0.77912'
    },
    'pebbles': {
        'trial1': '0.87778',
        'trial2': '0.87291',
        'trial3': '0.5299'
    },
    'combined': {
        'trial1': '0.851349130444814',
        'trial2': '0.64472965473281',
        'trial3': '1.02164666972162'
    },
    'average_black_sand': '0.675845499443104',
    'average_pebbles': '0.760196968849079',
    'average_combined': '0.839241818299747'
}, {
    'time': '3:00',
    'black_sand': {
        'trial1': '0.48434',
        'trial2': '0.77174',
        'trial3': '0.78608'
    },
    'pebbles': {
        'trial1': '0.89009',
        'trial2': '0.8814',
        'trial3': '0.42777'
    },
    'combined': {
        'trial1': '0.715968849356811',
        'trial2': '0.525983399552008',
        'trial3': '1.02164666972162'
    },
    'average_black_sand': '0.680720089996349',
    'average_pebbles': '0.733086950391478',
    'average_combined': '0.754532972876812'
}, {
    'time': '3:30',
    'black_sand': {
        'trial1': '0.33658',
        'trial2': '0.86694',
        'trial3': '0.86387'
    },
    'pebbles': {
        'trial1': '0.63919',
        'trial2': '0.63536',
        'trial3': '0.3836'
    },
    'combined': {
        'trial1': '0.581986454067191',
        'trial2': '0.475670888159993',
        'trial3': '0.955475320550386'
    },
    'average_black_sand': '0.689130544099481',
    'average_pebbles': '0.552716165447672',
    'average_combined': '0.671044220925857'
}, {
    'time': '4:00',
    'black_sand': {
        'trial1': '0.29803',
        'trial2': '0.95627',
        'trial3': '0.6697'
    },
    'pebbles': {
        'trial1': '0.3402',
        'trial2': '0.34046',
        'trial3': '0.3444'
    },
    'combined': {
        'trial1': '0.5289680012032',
        'trial2': '0.390115035792213',
        'trial3': '0.6470221059328'
    },
    'average_black_sand': '0.641333939939985',
    'average_pebbles': '0.341684617401458',
    'average_combined': '0.522035047642738'
}, {
    'time': '4:30',
    'black_sand': {
        'trial1': '0.1513',
        'trial2': '0.81694',
        'trial3': '0.38303'
    },
    'pebbles': {
        'trial1': '0.26241',
        'trial2': '0.30029',
        'trial3': '0.40188'
    },
    'combined': {
        'trial1': '0.538753201792',
        'trial2': '0.29951999078144',
        'trial3': '0.58906907544576'
    },
    'average_black_sand': '0.450422188328802',
    'average_pebbles': '0.321524850605226',
    'average_combined': '0.4757807560064'
}, {
    'time': '5:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.52588',
        'trial3': '0.20694'
    },
    'pebbles': {
        'trial1': '0.19799',
        'trial2': '0.23458',
        'trial3': '0.33429'
    },
    'combined': {
        'trial1': '0.451749674981966',
        'trial2': '0.302081536129702',
        'trial3': '0.538756564053752'
    },
    'average_black_sand': '0.244270737944599',
    'average_pebbles': '0.255621908790325',
    'average_combined': '0.430862591721807'
}, {
    'time': '5:30',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.15864',
        'trial3': '0.07255'
    },
    'pebbles': {
        'trial1': '0.19998',
        'trial2': '0.23724',
        'trial3': '0.09111'
    },
    'combined': {
        'trial1': '0.264328827127044',
        'trial2': '0.151296922599682',
        'trial3': '0.353126748887472'
    },
    'average_black_sand': '0.0770657409914085',
    'average_pebbles': '0.176110150237727',
    'average_combined': '0.2562508328714'
}, {
    'time': '6:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.04702',
        'trial3': '0.01435'
    },
    'pebbles': {
        'trial1': '0.11566',
        'trial2': '0.26961',
        'trial3': '0.0074'
    },
    'combined': {
        'trial1': '0.114056522666667',
        'trial2': '0',
        'trial3': '0.22503380224'
    },
    'average_black_sand': '0.0204581589976259',
    'average_pebbles': '0.130893171071289',
    'average_combined': '0.113030108302222'
}, {
    'time': '6:30',
    'black_sand': {
        'trial1': '0',
        'trial2': '0.03967',
        'trial3': '0'
    },
    'pebbles': {
        'trial1': '0',
        'trial2': '0.13012',
        'trial3': '0'
    },
    'combined': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0.113286711893331'
    },
    'average_black_sand': '0.0132241282583574',
    'average_pebbles': '0.0433740257599999',
    'average_combined': '0.0377622372977771'
}, {
    'time': '7:00',
    'black_sand': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0'
    },
    'pebbles': {
        'trial1': '0',
        'trial2': '0.01446',
        'trial3': '0'
    },
    'combined': {
        'trial1': '0',
        'trial2': '0',
        'trial3': '0'
    },
    'average_black_sand': '0',
    'average_pebbles': '0.00481933619555556',
    'average_combined': '0'
}]






// CHART LINES
const data_velocity = {

    datasets: [{
            label: 'Black Sand',
            data: averageVelocity,
            backgroundColor: '#f35b04',
            borderColor: '#f35b04',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_black_sand'
            }
        },
        {
            label: 'Pebbles',
            data: averageVelocity,
            backgroundColor: '#1565c0',
            borderColor: '#1565c0',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_pebbles'
            }
        },
        {
            label: 'Combined',
            data: averageVelocity,
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_combined'
            }
        },
        {
            label: 'Black Sand T1',
            data: averageVelocity,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial1',
            }
        },
        {
            label: 'Black Sand T2',
            data: averageVelocity,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial2',
            }
        },
        {
            label: 'Black Sand T3',
            data: averageVelocity,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial3'
            }
        },
        {
            label: 'Pebbles T1',
            data: averageVelocity,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial1'
            }
        },
        {
            label: 'Pebbles T2',
            data: averageVelocity,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial2'
            }
        },
        {
            label: 'Pebbles T3',
            data: averageVelocity,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial3'
            }
        },
        {
            label: 'Combined T1',
            data: averageVelocity,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial1'
            }
        },
        {
            label: 'Combined T2',
            data: averageVelocity,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial2'
            }
        },
        {
            label: 'Combined T3',
            data: averageVelocity,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial3'
            }
        },
    ]
};

const data_collector = {

    datasets: [{
            label: 'Black Sand',
            data: collectorTemperature,
            backgroundColor: '#f35b04',
            borderColor: '#f35b04',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_black_sand'
            }
        },
        {
            label: 'Pebbles',
            data: collectorTemperature,
            backgroundColor: '#1565c0',
            borderColor: '#1565c0',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_pebbles'
            }
        },
        {
            label: 'Combined',
            data: collectorTemperature,
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_combined'
            }
        },
        {
            label: 'Black Sand T1',
            data: collectorTemperature,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial1',
            }
        },
        {
            label: 'Black Sand T2',
            data: collectorTemperature,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial2',
            }
        },
        {
            label: 'Black Sand T3',
            data: collectorTemperature,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial3'
            }
        },
        {
            label: 'Pebbles T1',
            data: collectorTemperature,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial1'
            }
        },
        {
            label: 'Pebbles T2',
            data: collectorTemperature,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial2'
            }
        },
        {
            label: 'Pebbles T3',
            data: collectorTemperature,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial3'
            }
        },
        {
            label: 'Combined T1',
            data: collectorTemperature,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial1'
            }
        },
        {
            label: 'Combined T2',
            data: collectorTemperature,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial2'
            }
        },
        {
            label: 'Combined T3',
            data: collectorTemperature,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial3'
            }
        },
    ]
};

const data_chimney = {

    datasets: [{
            label: 'Black Sand',
            data: chimneyTemperature,
            backgroundColor: '#f35b04',
            borderColor: '#f35b04',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_black_sand'
            }
        },
        {
            label: 'Pebbles',
            data: chimneyTemperature,
            backgroundColor: '#1565c0',
            borderColor: '#1565c0',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_pebbles'
            }
        },
        {
            label: 'Combined',
            data: chimneyTemperature,
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_combined'
            }
        },
        {
            label: 'Black Sand T1',
            data: chimneyTemperature,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial1',
            }
        },
        {
            label: 'Black Sand T2',
            data: chimneyTemperature,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial2',
            }
        },
        {
            label: 'Black Sand T3',
            data: chimneyTemperature,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial3'
            }
        },
        {
            label: 'Pebbles T1',
            data: chimneyTemperature,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial1'
            }
        },
        {
            label: 'Pebbles T2',
            data: chimneyTemperature,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial2'
            }
        },
        {
            label: 'Pebbles T3',
            data: chimneyTemperature,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial3'
            }
        },
        {
            label: 'Combined T1',
            data: chimneyTemperature,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial1'
            }
        },
        {
            label: 'Combined T2',
            data: chimneyTemperature,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial2'
            }
        },
        {
            label: 'Combined T3',
            data: chimneyTemperature,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial3'
            }
        },
    ]
};

const data_density = {

    datasets: [{
            label: 'Black Sand',
            data: density,
            backgroundColor: '#f35b04',
            borderColor: '#f35b04',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_black_sand'
            }
        },
        {
            label: 'Pebbles',
            data: density,
            backgroundColor: '#1565c0',
            borderColor: '#1565c0',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_pebbles'
            }
        },
        {
            label: 'Combined',
            data: density,
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_combined'
            }
        },
        {
            label: 'Black Sand T1',
            data: density,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial1',
            }
        },
        {
            label: 'Black Sand T2',
            data: density,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial2',
            }
        },
        {
            label: 'Black Sand T3',
            data: density,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial3'
            }
        },
        {
            label: 'Pebbles T1',
            data: density,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial1'
            }
        },
        {
            label: 'Pebbles T2',
            data: density,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial2'
            }
        },
        {
            label: 'Pebbles T3',
            data: density,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial3'
            }
        },
        {
            label: 'Combined T1',
            data: density,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial1'
            }
        },
        {
            label: 'Combined T2',
            data: density,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial2'
            }
        },
        {
            label: 'Combined T3',
            data: density,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial3'
            }
        },
    ]
};

const data_power = {

    datasets: [{
            label: 'Black Sand',
            data: power,
            backgroundColor: '#f35b04',
            borderColor: '#f35b04',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_black_sand'
            }
        },
        {
            label: 'Pebbles',
            data: power,
            backgroundColor: '#1565c0',
            borderColor: '#1565c0',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_pebbles'
            }
        },
        {
            label: 'Combined',
            data: power,
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_combined'
            }
        },
        {
            label: 'Black Sand T1',
            data: power,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial1',
            }
        },
        {
            label: 'Black Sand T2',
            data: power,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial2',
            }
        },
        {
            label: 'Black Sand T3',
            data: power,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial3'
            }
        },
        {
            label: 'Pebbles T1',
            data: power,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial1'
            }
        },
        {
            label: 'Pebbles T2',
            data: power,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial2'
            }
        },
        {
            label: 'Pebbles T3',
            data: power,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial3'
            }
        },
        {
            label: 'Combined T1',
            data: power,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial1'
            }
        },
        {
            label: 'Combined T2',
            data: power,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial2'
            }
        },
        {
            label: 'Combined T3',
            data: power,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial3'
            }
        },
    ]
};

const data_auc = {

    datasets: [{
            label: 'Black Sand',
            data: auc,
            backgroundColor: '#f35b04',
            borderColor: '#f35b04',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_black_sand'
            }
        },
        {
            label: 'Pebbles',
            data: auc,
            backgroundColor: '#1565c0',
            borderColor: '#1565c0',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_pebbles'
            }
        },
        {
            label: 'Combined',
            data: auc,
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'average_combined'
            }
        },
        {
            label: 'Black Sand T1',
            data: auc,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial1',
            }
        },
        {
            label: 'Black Sand T2',
            data: auc,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial2',
            }
        },
        {
            label: 'Black Sand T3',
            data: auc,
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'black_sand.trial3'
            }
        },
        {
            label: 'Pebbles T1',
            data: auc,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial1'
            }
        },
        {
            label: 'Pebbles T2',
            data: auc,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial2'
            }
        },
        {
            label: 'Pebbles T3',
            data: auc,
            backgroundColor: '#a9d6e5',
            borderColor: '#a9d6e5',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'pebbles.trial3'
            }
        },
        {
            label: 'Combined T1',
            data: auc,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial1'
            }
        },
        {
            label: 'Combined T2',
            data: auc,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial2'
            }
        },
        {
            label: 'Combined T3',
            data: auc,
            backgroundColor: '#70e000',
            borderColor: '#70e000',
            borderWidth: 1,
            tension: 0.3,
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'combined.trial3'
            }
        },
    ]
};










// CHART CONFIG
const config_velocity = {
    type: 'line',
    data: data_velocity,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    },
                },
            },
            title: {
                display: true,
                text: 'Average Velocity (meter/second)',
                font: {
                    size: 30,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
            x: {
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
        },

    }
};

const config_collector = {
    type: 'line',
    data: data_collector,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    },
                },
            },
            title: {
                display: true,
                text: 'Collector Temperature (degrees Celcius)',
                font: {
                    size: 30,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
            x: {
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
        },

    }
};

const config_chimney = {
    type: 'line',
    data: data_chimney,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    },
                },
            },
            title: {
                display: true,
                text: 'Chimney Temperature (degrees Celcius)',
                font: {
                    size: 30,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
            x: {
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
        },

    }
};

const config_density = {
    type: 'line',
    data: data_density,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    },
                },
            },
            title: {
                display: true,
                text: 'Air Density (kilogram/cu.meter)',
                font: {
                    size: 30,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
            x: {
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
        },

    }
};

const config_power = {
    type: 'line',
    data: data_power,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    },
                },
            },
            title: {
                display: true,
                text: 'Theoretical Power (watts)',
                font: {
                    size: 30,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
            x: {
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
        },

    }
};

const config_auc = {
    type: 'line',
    data: data_auc,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    },
                },
            },
            title: {
                display: true,
                text: 'Area Under the Curve (sq. unit)',
                font: {
                    size: 30,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
            x: {
                grid: {
                    display: true,
                    color: "#272640"
                },
            },
        },

    }
};







const lineChart_velocity = new Chart(
    document.getElementById('lineChart_velocity'),
    config_velocity
);

const lineChart_collector = new Chart(
    document.getElementById('lineChart_collector'),
    config_collector
);

const lineChart_chimney = new Chart(
    document.getElementById('lineChart_chimney'),
    config_chimney
);

const lineChart_density = new Chart(
    document.getElementById('lineChart_density'),
    config_density
);

const lineChart_power = new Chart(
    document.getElementById('lineChart_power'),
    config_power
);

const lineChart_auc = new Chart(
    document.getElementById('lineChart_auc'),
    config_auc
);