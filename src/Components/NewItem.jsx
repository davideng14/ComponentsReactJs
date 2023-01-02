export default function NewItem({ title, summary }) {
    return (
      <div className="new-item">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      );
}