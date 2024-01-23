import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

interface DetailsContainerProps {
  className?: string;
}

export const DetailsContainer: FC<DetailsContainerProps> = memo((props) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Card fullWidth border="round" className={className} padding="24">
      <ArticleDetails id={id} />
    </Card>
  );
});
