import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

export type WorkspaceModalType = 'upgrade' | 'task';

interface WorkspaceModalContextValue {
  activeModal: WorkspaceModalType | null;
  openModal: (type: WorkspaceModalType) => void;
  closeModal: () => void;
}

const WorkspaceModalContext = createContext<WorkspaceModalContextValue | null>(null);

export function WorkspaceModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<WorkspaceModalType | null>(null);

  const value = useMemo(
    () => ({
      activeModal,
      openModal: (type: WorkspaceModalType) => setActiveModal(type),
      closeModal: () => setActiveModal(null),
    }),
    [activeModal],
  );

  return (
    <WorkspaceModalContext.Provider value={value}>
      {children}
    </WorkspaceModalContext.Provider>
  );
}

export function useWorkspaceModal() {
  const context = useContext(WorkspaceModalContext);

  if (!context) {
    throw new Error('useWorkspaceModal must be used within a WorkspaceModalProvider');
  }

  return context;
}
