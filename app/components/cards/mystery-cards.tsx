import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export interface MysteryCardsProps {
  cards: string[] | React.ReactNode[];
  color: string | string[];
}

export default function MysteryCards({ cards, color }: MysteryCardsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-12">
        {cards.map((text, index) => (
          <div
            key={index}
            className={classNames(
              'group flex items-center justify-center',
              'shadow-sm hover:shadow-lg transition-shadow duration-200',
              'w-72 h-72 rounded-lg',
              Array.isArray(color) ? color[index] : color,
            )}
          >
            <FontAwesomeIcon
              icon={faQuestion}
              size="9x"
              fixedWidth
              className="group-hover:hidden"
              fade
            />
            <p className="hidden group-hover:block px-8 py-4 text-lg">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
