import {useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import {HiCheckCircle} from 'react-icons/hi';

const regionList = [
    {name: 'National'},
    {name: 'Regional'},
    {name: 'Divisional'},
    {name: 'State'},
    {name: 'HRR'},
    {name: 'HSA'},
    {name: 'Zip'}
]

export default function RegionList() {
    const [selected, setSelected] = useState(regionList[0])

    return (
        <div className="flex">
            <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">Region</RadioGroup.Label>
                <div className="space-y-3 flex flex-wrap ">
                    {regionList.map((region) => (
                        <RadioGroup.Option
                            key={region.name}
                            value={region.name}
                            className={({active, checked}) =>
                                `${active
                                    ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                                    : ''}
                  ${checked ? 'bg-sky-800 bg-opacity-75 text-white' : 'bg-white'}
                    w-32 h-12 relative rounded-lg shadow-md p-4 m-3 cursor-pointer flex focus:outline-none`}>
                            {({active, checked}) => (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}>
                                                    {region.name}
                                                </RadioGroup.Label>
                                            </div>
                                        </div>
                                        {checked && (
                                            <div className="flex-shrink-0 text-white">
                                                <HiCheckCircle className="w-6 h-6 pl-1"/>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}

