import { cn } from "~lib/utils";

type StepperBarProps = {
  barStatus: string;
};

const StepperBar = ({ barStatus }: StepperBarProps) => {
  return (
    <div className={"flex items-center m-auto w-full"}>
      <div className="w-4/5 bg-gray-200 rounded-full h-2 dark:bg-gray-200 m-auto">
        <div
          className={cn(
            "bg-sam-green-300 h-2 rounded-full",
            barStatus === "initial" && "w-0",
            barStatus === "fill" && "animate-fill-bar",
            barStatus === "empty" && "animate-empty-bar w-0"
          )}
        ></div>
      </div>
    </div>
  );
};

export default StepperBar;
