import {
  CheckIcon,
  ThumbUpIcon,
  PlusIcon,
  ArrowRightIcon,
  RefreshIcon,
  TrashIcon,
  PencilIcon,
  AdjustmentsIcon,
  
} from '@heroicons/react/outline';

type Log = {
  id: number;
  user: string;
  message: string;
  action: string;
  time: string;
};

function EventCard({ event }: { event: Log }) {
  let icon = null;
  let bgColor = '';
  let actionFr = '';

  switch (event.action) {
    case 'Create':
      icon = <PlusIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-green-500';
      actionFr = 'Création';
      break;
    case 'Edit':
      icon = <PencilIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-yellow-500';
      actionFr = 'Modification';
      break;
    case 'Delete':
      icon = <TrashIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-red-500';
      actionFr = 'Suppression';
      break;
    case 'Transfer':
      icon = <ArrowRightIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-blue-500';
      actionFr = 'Transfert';
      break;
    case 'Reform':
      icon = <RefreshIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-purple-500';
      actionFr = 'Réforme';
      break;
    case 'Affectation':
      icon = <AdjustmentsIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-indigo-500';
      actionFr = 'Affectation';
      break;
    case 'Import':
      icon = <CheckIcon className="h-5 w-5 text-white" />;
      bgColor = 'bg-pink-500';
      actionFr = 'Importation';
      break;
      case 'Demand':
        icon = <ThumbUpIcon className="h-5 w-5 text-white" />;
        bgColor = 'bg-pink-500';
        actionFr = 'Demande';
        break;
    default:
      break;
  }

  return (
    <div className="relative flex space-x-3">
      <div>
        <span
          className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${bgColor}`}
        >
          {icon}
        </span>
      </div>
      <div className="flex flex-1 pt-1.5 justify-between space-x-4">
        <div>
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">
              [{new Date(event.time).toLocaleTimeString()}]{' '}
            </span>
            <span className="font-medium text-gray-900">{actionFr} </span>
            par <span className="font-medium text-gray-900">{event.user}</span>
            {'. '}
            <span className="italic">{event.message}</span>
          </p>
        </div>
        <div className="text-right text-sm whitespace-nowrap text-gray-500">
          <time dateTime={event.time}>
            {new Date(event.time).toLocaleDateString()}{' '}
          </time>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
