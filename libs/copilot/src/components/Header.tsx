import AudioPresence from '@chainlit/app/src/components/AudioPresence';
import { Logo } from '@chainlit/app/src/components/Logo';
import ChatProfiles from '@chainlit/app/src/components/header/ChatProfiles';
import NewChatButton from '@chainlit/app/src/components/header/NewChat';
import { Button } from '@chainlit/app/src/components/ui/button';
import { IChainlitConfig, useAudio } from '@chainlit/react-client';

import { useCopilotInteract } from '../hooks';

interface IProjectConfig {
  config?: IChainlitConfig;
  error?: Error;
  isLoading: boolean;
  language: string;
}

interface Props {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  projectConfig: IProjectConfig;
}

// ...existing imports...

const Header = ({
  expanded,
  setExpanded,
  projectConfig
}: Props): JSX.Element => {
  const { config } = projectConfig;
  const { audioConnection } = useAudio();
  const { startNewChat } = useCopilotInteract();

  const hasChatProfiles = !!config?.chatProfiles.length;

  return (
    <div className="flex align-center justify-between p-4 pb-0">
      <div className="flex items-center gap-4">
        <Logo className="w-[100px]" />
        {hasChatProfiles ? <ChatProfiles /> : null}
      </div>
      <div className="flex items-center">
        {audioConnection === 'on' ? (
          <AudioPresence
            type="server"
            height={20}
            width={40}
            barCount={4}
            barSpacing={2}
          />
        ) : null}
        <NewChatButton
          className="text-muted-foreground mt-[1.5px]"
          onConfirm={startNewChat}
        />
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setExpanded(!expanded)}
        ></Button>
      </div>
    </div>
  );
};

export default Header;
