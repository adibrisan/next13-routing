"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
};

export default error;
