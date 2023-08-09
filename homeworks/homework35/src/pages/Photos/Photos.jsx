import { useLoaderData, useNavigation } from "react-router-dom"

export const Photos = () => {
    const { photos } = useLoaderData();
    const { state } = useNavigation();
    return (
        <>
            {state === 'loading'
                ?
                <p className="loader">Loading...</p>
                :
                <div className="photos">
                    {photos.map(photo => 
                        <div className="photo" key={photo.id}>
                            <img src={photo.thumbnailUrl} alt="Album_photo" />
                        </div>
                        )}
                </div>
            }
        </>  
    )
}