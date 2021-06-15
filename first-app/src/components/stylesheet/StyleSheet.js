import "./styleSheet.css"

const StyleSheet = (props) => {
    const isPrimary=props.isPrimary ? "primary" :"secondary"
    return (
        <div>
            <div className="stylesheet-container">

                <img src="https://media.bitdegree.org/storage/media/images/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg"
                alt="developer"/>
                <h1>A full stack developer</h1>
                <h2 className={isPrimary}>Should write codes</h2>
            </div>
            
        </div>
    )
}

export default StyleSheet;