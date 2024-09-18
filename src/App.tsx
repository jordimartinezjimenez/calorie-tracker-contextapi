import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { useActivity } from "./hooks/useActivity"

function App() {

  const { state, dispatch } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canResetApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="py-3 bg-slate-600">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-center text-white uppercase">Contador de Calorias</h1>
          <button
            className="p-2 text-sm font-bold uppercase bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400 text-slate-700 disabled:opacity-10"
            disabled={!canResetApp()}
            onClick={() => dispatch({ type: 'reset-app' })}
          >Reiniciar App</button>
        </div>
      </header>
      <section className="px-5 py-20 bg-slate-500">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="py-10 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
      </section>

      <section className="max-w-4xl p-10 mx-auto">
        <ActivityList />
      </section>
    </>
  )
}

export default App
