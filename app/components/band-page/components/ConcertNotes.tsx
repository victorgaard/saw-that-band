import { Note } from '@/types/bands';
import { Icon } from '../../icon/Icon';

type ConcertNotesProps = {
  user: string;
  notes: Note[] | undefined;
};

function ConcertNotes({ user, notes }: ConcertNotesProps) {
  if (!notes || notes.length === 0) return null;

  return (
    <div className="-mx-10 -mb-1 mt-12 flex flex-col rounded-lg px-6 text-sm">
      <p className="m-0 mb-8 flex w-full flex-nowrap items-center text-xs text-zinc-300 before:relative before:mr-5 before:h-[1px] before:w-full before:bg-zinc-600 before:opacity-30 before:content-[''] after:relative after:ml-5 after:h-[1px] after:w-full after:bg-zinc-600 after:opacity-30 after:content-['']">
        <span className="flex-shrink-0 text-xs font-semibold uppercase text-zinc-600">
          NOTES FROM {user}
        </span>
      </p>
      <div className="flex flex-col gap-5">
        {notes.map((note, idx) => (
          <div key={idx} className="flex items-center gap-5 px-7">
            <Icon name={note.icon} />
            <p className="pr-8">{note.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConcertNotes;
