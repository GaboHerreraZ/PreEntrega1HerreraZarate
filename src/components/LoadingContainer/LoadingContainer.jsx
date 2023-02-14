import { ProgressSpinner } from "../../shared/libraries/primereact";
import "./LoadingContainer.css";

export const LoadingContainer = () => {
  return (
    <div className="loading">
      <div>
        <ProgressSpinner />
      </div>
    </div>
  );
};
