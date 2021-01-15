import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import * as moment from 'moment';
import { RootState } from 'store';
import { modifyMemo, deleteMemo } from 'store/memos';

interface MemoViewParams {
  id: string;
}

const MemoView: FunctionComponent = () => {
  const { id } = useParams<MemoViewParams>();
  const { memos } = useSelector((state: RootState) => state.memos);
  const memo = memos.find((memo) => memo.id === Number(id));
  const [text, setText] = useState(memo?.content);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  const handleModifyMemo = () => {
    const result = confirm('수정하시겠습니까?');
    const modifiedAt = moment().format('YYYY-MM-DD HH:mm:ss');

    if (!result) return;

    dispatch(
			modifyMemo({ id: Number(id), createdAt: modifiedAt, content: text })
    );
  };

  const handleDeleteMemo = () => {
    const result = confirm('삭제하시겠습니까?');

    if (!result) return;

    dispatch(deleteMemo(Number(id)));
    history.push('/memo');
  };

  useEffect(() => {
    setText(memo?.content);
  }, [id]);

  return (
    <>
      <div>
        <button>{`작성일: ${memo?.createdAt}`}</button>
        <button onClick={handleModifyMemo}>수정</button>
        <button onClick={handleDeleteMemo}>삭제</button>
      </div>
      <textarea value={text} onChange={handleText}></textarea>
    </>
  );
};

export default MemoView;
