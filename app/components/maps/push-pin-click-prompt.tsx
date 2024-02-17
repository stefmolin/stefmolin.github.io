import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MAP_PIN } from '../../data/constants';

export default function PushPinClickPrompt() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <FontAwesomeIcon
        icon={faInfo}
        size="lg"
        fixedWidth
        className="border-2 border-black rounded-full py-0.5 mr-2"
        bounce
      />{' '}
      <p className="text-lg">Click a {MAP_PIN} on the map to see more information.</p>
    </div>
  );
}
