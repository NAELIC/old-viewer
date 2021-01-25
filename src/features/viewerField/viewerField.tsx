import { useSelector } from "react-redux";
import { selectData } from "../../app/data";
import Field from "@bit/naelic.viewer.field"
import { Color } from "@nodetron/types/enum";

export function ViewerField() {
  const data = useSelector(selectData)
  const canvasSize = { width: 1080, height: 700 };

  return (
    <div style={canvasSize}>
      <Field
        ball={ data.ball }
        robots={{
          blue: data.color === Color.BLUE ? data.robots.allies : data.robots.opponents,
          yellow: data.color === Color.YELLOW ? data.robots.allies : data.robots.opponents,
        }}
        field={{
          ...data.field,
        }}
        container={canvasSize}
        color="#197dd4"
      />
    </div>
  );
}
