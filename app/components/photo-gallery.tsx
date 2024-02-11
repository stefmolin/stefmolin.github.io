import { useRef, useState } from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import PhotoAlbum, { type Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface PhotoGalleryProps {
  photos: Photo[];
  shufflePhotos?: boolean;
  className?: string;
  title?: string;
  padding?: number;
}

export default function PhotoGallery({
  className,
  photos,
  shufflePhotos = false,
  title = 'Photo gallery',
  padding = 0,
}: PhotoGalleryProps) {
  const photoGalleryRef = useRef<null | HTMLDivElement>(null);

  const photosPerPage = 12;
  const [offset, setOffset] = useState(0);

  const [clickedPhotoIndex, setClickedPhotoIndex] = useState(-1);

  const [photoArray, setPhotoArray] = useState(
    (shufflePhotos ? _.shuffle(photos) : photos).map((photo) => ({
      ...photo,
      description: photo.alt,
    })),
  );

  const onPageChange = ({ selected }) => {
    setOffset((selected * photosPerPage) % photoArray.length);
    if (photoGalleryRef.current != null)
      photoGalleryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
  };
  return (
    <div ref={photoGalleryRef} className={className}>
      <h2 className="text-3xl mb-5">{title}</h2>
      <PhotoAlbum
        layout="rows"
        photos={photoArray.slice(offset, offset + photosPerPage)}
        padding={padding}
        onClick={({ index }) => setClickedPhotoIndex(offset + index)}
        rowConstraints={{ minPhotos: 2 }}
      />
      <Lightbox
        slides={photoArray}
        open={clickedPhotoIndex >= 0}
        index={clickedPhotoIndex}
        close={() => setClickedPhotoIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        captions={{ showToggle: true }}
      />
      <ReactPaginate
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(photoArray.length / photosPerPage)}
        renderOnZeroPageCount={null}
        className="flex flex-row items-center justify-center space-x-1 bg-neutral-50 text-xl font-bold text-slate-800 p-5"
        pageLinkClassName="px-5 py-2 hover:underline shadow"
        activeLinkClassName="text-blue-700 shadow"
        nextLinkClassName="shadow px-5 py-2"
        previousLinkClassName="shadow px-5 py-2"
      />
    </div>
  );
}
