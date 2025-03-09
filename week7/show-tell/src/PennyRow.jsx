import "./PennyRow.css";

export function PennyRow({penny, location, year, favPenny, image, odd}) {
    return (
        <tr className={odd ? "odd" : "even"}>
            <td style={{fontWeight: favPenny ? 700 : 400}}>{penny}</td>
            <td>{location}</td>
            <td>{year}</td>
            <td>{favPenny ? "Yes" : "No"}</td>
            <td><img src={image} alt={penny}></img></td>
        </tr>
    )
}