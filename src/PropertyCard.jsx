import { FaBookmark } from 'react-icons/fa';
import { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function PropertyCard({ property, thing }) {
    const [isActive, setIsActive] = useState(null);

    function handleBookmarked() {
        thing(property);
        setIsActive(current => !current);
    };

    return (
    <div className="border-2 bg-gray-50 shadow-lg">
        <div className="relative">
            <div className="image">
                {property.photos[0] != undefined ? (
                    <LazyLoadImage
                        role="img" aria-label={`image of ${property.display_address}`}
                        src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
                        alt={property.display_address}
                        effect="blur"
                    />
                ): (
                    <LazyLoadImage
                        role="img" aria-label="Placeholder image"
                        src="https://via.placeholder.com/700x450"
                        alt={property.display_address}
                        effect="blur" />
                )}
            </div>

            <button role="button" className="absolute top-0 right-2" title="Click to bookmark this property" onClick={handleBookmarked}>
              <FaBookmark className={isActive ? 'text-rose-500' : 'text-yellow-400'} size="40" />
            </button>

            <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{property.price}</p>
        </div>

        <div className="px-3 py-2">
            <p>{property.display_address}</p>
        </div>
    </div>
    );
};

export default PropertyCard;
