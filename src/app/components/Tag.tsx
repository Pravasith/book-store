interface Props {
  content: string;
}

const Tag = (props: Props) => {
  return (
    <div className="rounded-full px-2 py-1 bg-theme-blue">
      <p className="small-p">{props.content}</p>
    </div>
  );
};

export default Tag;
