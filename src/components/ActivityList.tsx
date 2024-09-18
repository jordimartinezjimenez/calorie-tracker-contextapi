import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useActivity } from "../hooks/useActivity"

export default function ActivityList() {

    const { state: { activities }, dispatch, categoryName, isEmptyActivities } = useActivity()

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-slate-600">Comida y Actividades</h2>
            {isEmptyActivities ? <p className="my-5 text-center">No hay actividades aún...</p> :
                activities.map(activity => (
                    <div key={activity.id} className="flex justify-between px-5 py-10 mt-5 bg-white shadow-md">
                        <div className="relative space-y-2">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{categoryName(activity.category)}</p>
                            <p className="pt-5 text-2xl font-bold">{activity.name}</p>
                            <p className={`font-black text-4xl ${activity.category === 1 ? 'text-lime-500' : 'text-orange-500'}`}>{activity.calories} <span>Calorias</span></p>
                        </div>
                        <div className="flex items-center gap-5">
                            <button onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}><PencilSquareIcon className="w-8 h-8 text-gray-800" /></button>
                            <button onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}><XCircleIcon className="w-8 h-8 text-red-500" /></button>
                        </div>
                    </div>
                ))}
        </>
    )
}
