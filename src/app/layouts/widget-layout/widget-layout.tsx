import { useParams } from 'react-router-dom';

export function WidgetLayout() {
  const { widgetType } = useParams();
  return <section className={widgetType}>Widget Layout (widgetType: {widgetType})</section>;
}
