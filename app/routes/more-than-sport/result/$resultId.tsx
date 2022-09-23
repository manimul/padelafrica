import { useParams } from '@remix-run/react';

export default function ResultId() {
  const params = useParams();
  const id = params.resultId;
  return id;
}
