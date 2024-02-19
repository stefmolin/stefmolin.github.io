import { useRef, useState } from 'react';
import _ from 'lodash';
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
import Pagination from './pagination';
import PageSection, { type PageSectionProps } from './sections/page-section';

interface PhotoGalleryProps extends Omit<PageSectionProps, 'children'> {
  photos: Photo[];
  shufflePhotos?: boolean;
  padding?: number;
}

export default function PhotoGallery({
  divClassName,
  photos,
  shufflePhotos = false,
  title = 'Photo gallery 📷',
  titleClassName,
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

  return (
    <PageSection
      id="photos"
      anchorRef={photoGalleryRef}
      divClassName={divClassName}
      title={title}
      titleClassName={titleClassName}
    >
      <p className="mb-5">Click on a photo to learn more about it.</p>
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
      <Pagination
        itemsPerPage={photosPerPage}
        scrollRef={photoGalleryRef}
        setOffset={setOffset}
        totalItems={photoArray.length}
      />
    </PageSection>
  );
}
