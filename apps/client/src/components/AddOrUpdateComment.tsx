import { Stack } from "@bedrock-layout/primitives";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "ui";
import { AddCommentContainer, ButtonContainer } from "./Comment.styled";
import { MODE } from "./constant";
import type { CommentType } from "./types";

export function AddOrUpdateComment({
  addComment,
  commentDetails,
  mode,
  title,
}: any) {
  const { control, handleSubmit, setValue } = useForm<CommentType>({
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  const { id: commentId, comment, name } = commentDetails;

  useEffect(() => {
    if (mode === MODE.edit) {
      setValue("name", name);
      setValue("comment", comment);
    }
  }, []);

  const onSubmit = (formDate: any) => {
    addComment(commentId, formDate);

    setValue("name", "");
    setValue("comment", "");
  };

  return (
    <AddCommentContainer>
      <Typography name="heading3">{title}</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gutter="1rem">
          {mode === MODE.add && (
            <TextField
              control={control}
              placeholder="name"
              name="name"
              showErrorIcon={false}
              rules={{ required: "This is required." }}
            />
          )}

          <TextField
            control={control}
            placeholder="comment"
            name="comment"
            showErrorIcon={false}
            rules={{ required: "This is required." }}
          />

          <ButtonContainer>
            <Button
              label={mode === MODE.add ? "POST" : "UPDATE"}
              type="submit"
            />
          </ButtonContainer>
        </Stack>
      </form>
    </AddCommentContainer>
  );
}
