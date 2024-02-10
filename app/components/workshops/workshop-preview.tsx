import type Workshop from '../../interfaces/workshop';
import DurationIndicator from '../datetime/duration-indicator';
import LinkToWorkshop from './workshop-link';

export default function WorkshopPreview({ workshop }: { workshop: Workshop }) {
  return (
    <div className="shadow-sm hover:shadow-lg transition-shadow duration-200 px-6 py-4 flex flex-col m-5">
      <div className="flex flex-col justify-evenly space-y-5">
        <div className="flex flex-col items-start">
          <LinkToWorkshop workshop={workshop}>
            <h3 className="text-xl hover:underline text-pretty">{workshop.title}</h3>
          </LinkToWorkshop>
          <h4 className="text-slate-600">{workshop.subtitle}</h4>
        </div>
        <div>
          <LinkToWorkshop workshop={workshop}>
            <img
              src={workshop.coverImage}
              alt={workshop.title}
              className="md:float-left md:mr-5 mb-2 mx-auto max-w-64 object-cover"
            />
          </LinkToWorkshop>
          {/* TODO: should I float right here since the image is less important? also make it smaller*/}
          <div className="md:-mt-1">
            <p className="text-left text-pretty">{workshop.description[0]}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
          <div className="flex flex-row items-center">
            Topics/tags/libraries: pandas, seaborn, matplotlib
          </div>
          <div className="flex flex-row items-center">
            <DurationIndicator duration={workshop.duration} />
          </div>
        </div>
      </div>
    </div>
  );
}
