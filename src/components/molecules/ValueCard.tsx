import React from "react";
import { Card, CardBody, CardHeader, Label } from "../atoms";
import colors from "@/styles/colors";
interface ValueCardProps {
  title: string;
  value: number | null;
  className?: string;
}
const ValueCard: React.FC<ValueCardProps> = ({
  title,
  value,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <Card>
        <CardHeader title={title} />
        <CardBody>
          <div className="flex justify-start">
            <p style={{ color: colors.black, fontSize: 32 }}>{value}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export { ValueCard };
