import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { RootState } from 'store';

interface DeletedMemoViewParams {
  id: string;
}

const MemoView: FunctionComponent = () => {
	const history = useHistory();
	const { id } = useParams<DeletedMemoViewParams>();
	const { deletedMemos } = useSelector((state: RootState) => state.memos);
  const memo = deletedMemos.find((memo) => memo.id === Number(id))!;

	if (!memo) {
		history.push('/');
		return null;
	}
	
	const { createdAt, content } = memo;	

  // useEffect(() => {
  // }, [id]);

  return (
    <>
      <div>
        <button>{`작성일: ${createdAt}`}</button>
      </div>
      <textarea value={content} readOnly></textarea>
    </>
  );
};

export default MemoView;
