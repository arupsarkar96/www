

const Feature = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h3 className="card-title">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Feature