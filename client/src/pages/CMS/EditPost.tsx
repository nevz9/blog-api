import * as React from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useForm from '../../hooks/useForm';
import useCMS from '../../hooks/useCMS';
import handleAuthError from '../../utils/handleAuthError';
import { CommentList } from '../../components/PostDetailComment/CommentList';
import CMSForm from '../../components/CMSForm';

const formInitialValues = {
  title: '',
  tag: ''
};

export default function EditPost() {
  const {
    documents: { post },
    getPost,
    editPost
  } = useCMS();
  const { postId } = useParams();
  const [commentRef] = useAutoAnimate<HTMLDivElement>();
  const [editorValue, setEditorValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { formValues, setFormValues, changeHandler, errors, setErrors } =
    useForm(formInitialValues);

  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const { submitter } = e.nativeEvent as SubmitEvent;
      const { value } = submitter as HTMLButtonElement;
      setIsLoading(true);
      const response = await editPost(
        {
          body: editorValue,
          title: formValues.title,
          tag: formValues.tag,
          published: value
        },
        postId as string
      );

      setIsLoading(false);
      if (response.data.errors) return setErrors(response.data.errors);

      await getPost(postId as string);
    } catch (err) {
      setErrors(handleAuthError(err as AxiosError));
    }
  };

  React.useEffect(() => {
    getPost(postId as string);
  }, []);

  React.useEffect(() => {
    if (post) {
      setEditorValue(post.body);
      setFormValues({
        title: post.title,
        tag: post.tag
      });
    }
  }, [post]);

  return (
    <div>
      <CMSForm
        formValues={formValues}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        isLoading={isLoading}
        errors={errors}
        editorValue={editorValue}
        setEditorValue={setEditorValue}
      />
      <div ref={commentRef}>
        <h4>Comments</h4>
        {post?.comments.length ? (
          <CommentList comments={post.comments} isAuthor />
        ) : (
          <p>There are no comments on this blog post</p>
        )}
      </div>
    </div>
  );
}
