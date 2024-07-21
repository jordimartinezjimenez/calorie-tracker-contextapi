import { useReducer, useEffect, useMemo } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canResetApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-slate-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
          <button
            className="bg-gray-300 hover:bg-gray-400 p-2 font-bold uppercase text-slate-700 cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canResetApp()}
            onClick={() => dispatch({ type: 'reset-app' })}
          >Reiniciar App</button>
        </div>
      </header>
      <section className="bg-slate-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="bg-slate-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker
            activities={state.activities}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
