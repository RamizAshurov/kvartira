const CloseApproachDataCard = (props) => {
    const {close_approach_date, relative_velocity, miss_distance, orbiting_body} = props.data;

    const monthMap = {
        0: "янв",
        1: "февр",
        2: "мар",
        3: "апр",
        4: "май",
        5: "июн",
        6: "июл",
        7: "авг",
        8: "сен",
        9: "окт",
        10: "ноя",
        11: "дек"
    }

    const date = new Date(close_approach_date)

    return (
        <div style={{
            backgroundColor: "#303030",
            border: "1px solid #444444",
            borderRadius: "4px",
            marginBottom: "32px",
            padding: "16px"
        }}>
            <h4
                style={{
                    fontSize: "32px",
                    fontWeight: "500",
                    lineHeight: "1.2",
                    margin: "0 0 8px"
                }}
            >{`${date.getDate() + 1} ${monthMap[date.getMonth()]} ${date.getFullYear()}`}</h4>
            <ul>
                {
                    [
                        { name: "Отностительная скорость", value: parseInt(relative_velocity.kilometers_per_hour) + " км/ч"},
                        { name: "Расстояние", value: parseInt(miss_distance.kilometers) + " км" },
                        { name: "Орбита", value: orbiting_body }
                    ].map((property, index, arr) => (
                        <li
                            key={property.name}
                            style={{
                                borderBottom: index === (arr.length - 1) ? "" : "1px solid #444",
                                padding: "4px",
                            }}    
                        >
                            {property.name}: {property.value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CloseApproachDataCard