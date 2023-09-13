import AppIcons from "../assets/icons";

interface Props {
  name: keyof typeof AppIcons;
}

const Icon = (props: Props) => {
  const SelectedIcon = AppIcons[props.name];

  return (
    <div className="w-8 h-8">
      <SelectedIcon />
    </div>
  );
};

export default Icon;
