type LabelListProps = {
  /** Підписи в порядку показу. Між сусідніми стоїть крапка. */
  items: string[];
  /** Підпис списку для скрінрідерів. Не задано: без підпису. */
  label?: string;
};

export function LabelList({ items, label }: LabelListProps) {
  return (
    <ul
      aria-label={label}
      className="flex flex-wrap items-center font-sans text-caption text-ink"
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center">
          {index > 0 && (
            <span
              aria-hidden="true"
              className="mx-2 size-2 md:mx-3 rounded-control bg-accent"
            />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
