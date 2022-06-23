type ControlType = {
    title?: string
    outerData: Array<explanationArr>


}

type explanationArr = {
    manufacturer: string,
    model: string
}

export const Card = (props: ControlType) => {
    return (
        <>
            {props.outerData.map((el) => {
                return (
                    <div className="card">
                        <h1>{props.title}</h1>
                        <h2>Manufacturer: {el.manufacturer}</h2>
                        <h3>Model: {el.model}</h3>
                    </div>
                )
            })}


        </>
    )
}