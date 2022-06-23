import "./Card.css"

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
            {props.outerData.map((el,index) => {
                return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>

                )
            })}


        </>
    )
}