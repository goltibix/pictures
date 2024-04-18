function ImageShow({ image }){
    return(
        <div>
            <img src={image.urls.smalls} alt={image.alt_description}/>
        </div>
    )
}

export default ImageShow