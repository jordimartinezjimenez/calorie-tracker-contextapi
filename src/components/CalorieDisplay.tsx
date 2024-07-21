type CalorieDisplayProps = {
    calories: number
    text: string
}

export default function CalorieDisplay({ calories, text }: CalorieDisplayProps) {

    let colorCalories = ""
    switch (text) {
        case "Consumidas":
            colorCalories = "text-lime-500"
            break
        case "Quemadas":
            colorCalories = "text-orange-500"
            break
        case "Diferencia":
            colorCalories = "text-red-500"
            break
    }

    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className={`font-black text-6xl ${colorCalories}`}>{calories}</span> {text}
        </p>
    )
}
