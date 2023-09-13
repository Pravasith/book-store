function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path d="M24.05 9.49v15.78c0 1.99-1.4 3.61-3.12 3.61h-9.66c-1.72 0-3.12-1.61-3.12-3.61V9.49"></path>
        <path d="M5.77 6.5L26.23 6.5"></path>
        <path d="M18.92 3.12h-5.76c-.93 0-1.69.76-1.69 1.69v1.53h9.13V4.81c0-.93-.75-1.69-1.68-1.69z"></path>
        <path d="M15.95 13.63L15.95 21.31"></path>
        <path d="M12.52 13.63L12.52 21.31"></path>
        <path d="M19.28 13.63L19.28 21.31"></path>
      </g>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path d="M4 4L28 28"></path>
        <path d="M28 4L4 28"></path>
      </g>
    </svg>
  );
}

const AppIcons = {
  DELETE: DeleteIcon,
  CLOSE: CloseIcon,
} as const;

export default AppIcons;
